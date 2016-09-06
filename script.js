function PremiumCalculator() {

    //Global changable variables

    pct_global = {

        // User Interface
        "section_toggle_speed": 500,
        "error_msg_toggle_speed": 250,

        // Calculator Intial Variables
        "First_FY": 2017, //Last calendar year of first FY. i.e. 2016/2017 = 2017

        // Input Validation Error Messages
        "E_number": "Invalid number",
        "E_date": "Invalid date",
        "E_percent": "Invalid percent",
        "E_email": "Invalid email",
        "M_date": "The date your agency commenced coverage as a premium payer under the Comcare scheme. If coverage commenced prior to 1 January 2012, please enter 1 January 2012, else enter a date between 1 January 2012 and 30 June 2015.",
        "M_pool_trend": "The change in scheme average premium rate you wish to assume. A limited range of decreases/increases can be selected for later years.",
        "M_payroll": "The estimated payroll for your agency for the premium year in $m.",
        "M_prescribed_rate": "The prescribed rate (excl. GST) for the previous financial year for your agency. The prescribed rate for 2015-16 and 2016-17 for your agency are shown in the June 2016 Premium Calculation Guide (PCG) previously provided by Comcare.",
        "M_reassessment_window_payroll": "The annualised average payroll for your agency over the period of the reassessment window in $m.",
        "M_reassessment_window_cost": "The annualised average incurred cost for your agency over the period of the reassessment window in $m.",
        "M_reassessment_window":"The revised premium model uses a reassessment window of the four most recent complete financial injury years. This means that updated claims experience for the injury years from 1 July 2011 to 30 June 2015 would be used to calculate the prescribed amount for 2016–17.",


        // Calculations Variables

        //Pool Trend
        "_2016_17_scheme_average_premium_rate": 0.0171853995451391,
        "_2015_16_payroll_adjusted_scheme_average_premium_rate": 0.0183669835887731,
        "options_for_pool_trend": [-0.075, -0.05, -0.025, 0, 0.025, 0.05, 0.075],
        //Risk Relativity
        "_2015_16_scheme_average_premium_rate": 0.0185257915083354,
        //Coverage Date
        "Reassessment_window_start_date": "1/1/2012",
        "Reassessment_window_end_date": "30/6/2015",
        "Reassessment_window_years": 3.5, //used for more accurate calculation of the assessment window.

        //Performance Adjustment
        // average scheme incurred cost rate - Year 1
        "_2011_12_average_scheme_incurred_cost_rate_1": 0.01393524,
        "_2012_13_average_scheme_incurred_cost_rate_1": 0.01411246,
        "_2013_14_average_scheme_incurred_cost_rate_1": 0.01173556,
        "_2014_15_average_scheme_incurred_cost_rate_1": 0.0095278,
        "_2016_17_Risk_weighted_payroll_threshold": 2.05,
        "_2016_17_Size_factor_division_constant": 51.3,
        "Size_factor_minimum": 0.1,
        "Data_validation_for_payroll ": 441,
        "Data_validation_for_incurred_cost": 10,
        "_2017_wage_inflation": 0.0233125497116615,
        "_2018_wage_inflation": 0.0290587069738615,
        "_2019_wage_inflation": 0.030879727160297,
        "_2020_wage_inflation": 0.0316274999999999,

        //Premium Rate
        "Scheme_minimum_premium_rate": 0.014,

        //ITC < 100% in 2015-16 and 2016-17 (VLOOKUP in Controls)
        "itc_adj_2016_17_values": [0.999714020653597, 0.976615204678363, 0.976781793899455, 0.916109090909091],
        "itc_adj_2016_17_keys": [0.9947, 0.82, 0.5195, 0]

    }

    //Global unchangable variables


    //Dynamic risk constant variables (Unchangable)
    pct_risk_global_y2 = {
        "_2017_18_Risk_weighted_payroll_threshold": pct_global._2016_17_Risk_weighted_payroll_threshold * (1 + pct_global._2017_wage_inflation),
        "_2017_18_Size_factor_division_constant": pct_global._2016_17_Size_factor_division_constant * (1 + pct_global._2017_wage_inflation),
    }
    pct_risk_global_y3 = {
        "_2018_19_Risk_weighted_payroll_threshold": pct_risk_global_y2._2017_18_Risk_weighted_payroll_threshold * (1 + pct_global._2018_wage_inflation),
        "_2018_19_Size_factor_division_constant": pct_risk_global_y2._2017_18_Size_factor_division_constant * (1 + pct_global._2018_wage_inflation),
    }
    pct_risk_global_y4 = {
        "_2019_20_Risk_weighted_payroll_threshold": pct_risk_global_y3._2018_19_Risk_weighted_payroll_threshold * (1 + pct_global._2019_wage_inflation),
        "_2019_20_Size_factor_division_constant": pct_risk_global_y3._2018_19_Size_factor_division_constant * (1 + pct_global._2019_wage_inflation),
    }
    pct_risk_global_y5 = {
        "_2020_21_Risk_weighted_payroll_threshold": pct_risk_global_y4._2019_20_Risk_weighted_payroll_threshold * (1 + pct_global._2020_wage_inflation),
        "_2020_21_Size_factor_division_constant": pct_risk_global_y4._2019_20_Size_factor_division_constant * (1 + pct_global._2020_wage_inflation),
    }


    // global live results (unchangable)
    var pct_results = {
        "coverage_start_date": "",
        "itc": "",
        "itc_adj": "",
        "r_win": [],
        "previous_fy_intial_rate": [0, 0, 0, 0, 0],
        "adj_pool_tend": [0, 0, 0, 0, 0],
        "average_scheme_premium_rate": [0, 0, 0, 0, 0],
        "risk_relativity": [0, 0, 0, 0, 0],
        "average_scheme_incurred_cost_rate": [0, 0, 0, 0, 0],
        "average_performance_benchmark": [0, 0, 0, 0, 0],
        "payroll_reassessment_window": [0, 0, 0, 0, 0],
        "cost_reassessment_window": [0, 0, 0, 0, 0],
        "average_incurred_cost_rate": [0, 0, 0, 0, 0],
        "performance_ratio": [0, 0, 0, 0, 0],
        "agency_size_factor": [0, 0, 0, 0, 0],
        "agency_performance_adjustment": [0, 0, 0, 0, 0],
        "prescribed_rate": [0, 0, 0, 0, 0],
        "prescribed_amount": [0, 0, 0, 0, 0],
        "payroll": [0, 0, 0, 0, 0]
    }

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // feed select options for pool trend adjustment
    for (i = 0; i < pct_global.options_for_pool_trend.length; i++) {
        var selected = pct_global.options_for_pool_trend[i] === 0 ? "selected" : "";
        $(".pool_trend_adj").append("<option " + selected + " value='" + pct_global.options_for_pool_trend[i] + "'>" + pct_global.options_for_pool_trend[i] * 100 + "%" + "</option>");
    }

    //Feed Years Names to UI
    $(".This_FY").each(function(i, obj) {
        var fy = pct_global.First_FY + i;
        var y = fy - 1 + "/" + fy;
        var pfy = (fy - 2) + "/" + (fy - 1);
        $(this).html(y);
        $(".This_FY_D" + (i + 1)).html(y);
        $(".This_FY_P" + (i + 1)).html(pfy);
    });

    //ToolTip

    $(".pct_tt").click(function() {
        var this_toggle = $(this).closest('tr').next('tr').find(".msg_toggle");
        var msg = $(this).attr("msg");
        $(".msg_toggle").not(this_toggle).stop().slideUp(pct_global.section_toggle_speed);
        this_toggle.html(pct_global[msg]).stop().slideToggle(pct_global.section_toggle_speed);
    });

    // CALCULATIONS START

    function calc_year(year) {


        for (var i = 0; i < (year); i++) {
            pct_results.previous_fy_intial_rate[i] = i < 2 ? $(".pct_year_content_table").eq(i).find(".p_rate").val() / 100 : pct_results.prescribed_rate[i - 1];

            
            

            //Adjustment due to pool trend
            pct_results.adj_pool_tend[i] = i === 0 ? (pct_global._2016_17_scheme_average_premium_rate / pct_global._2015_16_payroll_adjusted_scheme_average_premium_rate) - 1 : $(".pct_year_content_table").eq(i).find(".pool_trend_adj").val() * 1;

            //Dynamic variables - Perfomance Adjustment variables for Y2 to Y5 in Controls.
            perfomance_adj_var_Y2 = {
                "_2012_13_average_scheme_incurred_cost_rate_2": pct_global._2011_12_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[1]),
                "_2013_14_average_scheme_incurred_cost_rate_2": pct_global._2012_13_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[1]),
                "_2014_15_average_scheme_incurred_cost_rate_2": pct_global._2013_14_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[1]),
                "_2015_16_average_scheme_incurred_cost_rate_1": pct_global._2014_15_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[1]),
            }

            perfomance_adj_var_Y3 = {
                "_2013_14_average_scheme_incurred_cost_rate_3": perfomance_adj_var_Y2._2012_13_average_scheme_incurred_cost_rate_2 * (1 + pct_results.adj_pool_tend[2]),
                "_2014_15_average_scheme_incurred_cost_rate_3": perfomance_adj_var_Y2._2013_14_average_scheme_incurred_cost_rate_2 * (1 + pct_results.adj_pool_tend[2]),
                "_2015_16_average_scheme_incurred_cost_rate_2": perfomance_adj_var_Y2._2014_15_average_scheme_incurred_cost_rate_2 * (1 + pct_results.adj_pool_tend[2]),
                "_2016_17_average_scheme_incurred_cost_rate_1": perfomance_adj_var_Y2._2015_16_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[2]),
            }

            perfomance_adj_var_Y4 = {
                "_2014_15_average_scheme_incurred_cost_rate_4": perfomance_adj_var_Y3._2013_14_average_scheme_incurred_cost_rate_3 * (1 + pct_results.adj_pool_tend[3]),
                "_2015_16_average_scheme_incurred_cost_rate_3": perfomance_adj_var_Y3._2014_15_average_scheme_incurred_cost_rate_3 * (1 + pct_results.adj_pool_tend[3]),
                "_2016_17_average_scheme_incurred_cost_rate_2": perfomance_adj_var_Y3._2015_16_average_scheme_incurred_cost_rate_2 * (1 + pct_results.adj_pool_tend[3]),
                "_2017_18_average_scheme_incurred_cost_rate_1": perfomance_adj_var_Y3._2016_17_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[3]),
            }

            perfomance_adj_var_Y5 = {
                "_2015_16_average_scheme_incurred_cost_rate_4": perfomance_adj_var_Y4._2014_15_average_scheme_incurred_cost_rate_4 * (1 + pct_results.adj_pool_tend[4]),
                "_2016_17_average_scheme_incurred_cost_rate_3": perfomance_adj_var_Y4._2015_16_average_scheme_incurred_cost_rate_3 * (1 + pct_results.adj_pool_tend[4]),
                "_2017_18_average_scheme_incurred_cost_rate_2": perfomance_adj_var_Y4._2016_17_average_scheme_incurred_cost_rate_2 * (1 + pct_results.adj_pool_tend[4]),
                "_2018_19_average_scheme_incurred_cost_rate_1": perfomance_adj_var_Y4._2017_18_average_scheme_incurred_cost_rate_1 * (1 + pct_results.adj_pool_tend[4]),
            }

            //Average scheme premium rate
            pct_results.average_scheme_premium_rate[i] = i === 0 ? pct_global._2016_17_scheme_average_premium_rate : pct_results.average_scheme_premium_rate[i - 1] * (1 + pct_results.adj_pool_tend[i]);



            
            //Your agency risk relativity
            var key = pct_global.itc_adj_2016_17_keys.indexOf(pct_results.itc);
            var value = key > -1 ? pct_global.itc_adj_2016_17_values[key] : pct_results.itc_adj;
            var vlook = (pct_results.previous_fy_intial_rate[i] / value);

            if (i === 0) {
                pct_results.risk_relativity[i] = pct_results.itc == 1 ? pct_results.previous_fy_intial_rate[i] / pct_global._2015_16_scheme_average_premium_rate : vlook / pct_global._2015_16_scheme_average_premium_rate

            } else {
                pct_results.risk_relativity[i] = pct_results.itc_adj === "" ? pct_results.previous_fy_intial_rate[i] / pct_results.average_scheme_premium_rate[i - 1] : (pct_results.previous_fy_intial_rate[i] / pct_results.itc_adj) / pct_results.average_scheme_premium_rate[i - 1];
            }





            //Average scheme incurred cost rate

            var f2 = pct_results.r_win[i] < 2 ? 0 : (pct_results.r_win[i] < 3 ? (pct_results.r_win[i] - Math.floor(pct_results.r_win[i])) / pct_results.r_win[i] : (1 / pct_results.r_win[i]));
            var f3 = pct_results.r_win[i] < 1 ? 0 : pct_results.r_win[i] < 2 ? (pct_results.r_win[i] - Math.floor(pct_results.r_win[i])) / pct_results.r_win[i] : (1 / pct_results.r_win[i]);
            var f4 = pct_results.r_win[i] < 1 ? 1 : (1 / pct_results.r_win[i]);

            if (i === 0) {
                var f1 = pct_results.r_win[i] < 3 ? 0 : (pct_results.r_win[i] - Math.floor(pct_results.r_win[i])) / pct_results.r_win[i];

                pct_results.average_scheme_incurred_cost_rate[i] = pct_global._2011_12_average_scheme_incurred_cost_rate_1 * f1 + pct_global._2012_13_average_scheme_incurred_cost_rate_1 * f2 + pct_global._2013_14_average_scheme_incurred_cost_rate_1 * f3 + pct_global._2014_15_average_scheme_incurred_cost_rate_1 * f4;
            } else {
                var f11 = pct_results.r_win[i] < 3 ? 0 : (pct_results.r_win[i] < 4 ? (pct_results.r_win[i] - Math.floor(pct_results.r_win[i])) / pct_results.r_win[i] : (1 / pct_results.r_win[i]));
                pct_results.average_scheme_incurred_cost_rate[i] = this['perfomance_adj_var_Y' + (1 + i)][Object.keys(this['perfomance_adj_var_Y' + (1 + i)])[0]] * f11 + this['perfomance_adj_var_Y' + (1 + i)][Object.keys(this['perfomance_adj_var_Y' + (1 + i)])[1]] * f2 + this['perfomance_adj_var_Y' + (1 + i)][Object.keys(this['perfomance_adj_var_Y' + (1 + i)])[2]] * f3 + this['perfomance_adj_var_Y' + (1 + i)][Object.keys(this['perfomance_adj_var_Y' + (1 + i)])[3]] * f4;


            }


            //Your agency average performance benchmark
            pct_results.average_performance_benchmark[i] = pct_results.risk_relativity[i] * pct_results.average_scheme_incurred_cost_rate[i];



            //Your agency average payroll over the reassessment window ($m)
            pct_results.payroll_reassessment_window[i] = $(".pct_year_content_table").eq(i).find(".pct_avg_pay_AP").val() * 1;

            //Your agency cost over the reassessment window ($m)
            pct_results.cost_reassessment_window[i] = $(".pct_year_content_table").eq(i).find(".pct_avg_cost_AP").val() * 1;

            //Your agency average incurred cost rate
            pct_results.average_incurred_cost_rate[i] = pct_results.cost_reassessment_window[i] / pct_results.payroll_reassessment_window[i];



            //Your agency performance ratio
            pct_results.performance_ratio[i] = (pct_results.cost_reassessment_window[i] / pct_results.payroll_reassessment_window[i]) / pct_results.average_performance_benchmark[i];


            //Your agency size factor  
            var thresh = i === 0 ? pct_global._2016_17_Risk_weighted_payroll_threshold : this['pct_risk_global_y' + (1 + i)]['_20' + (16 + i) + '_' + (17 + i) + '_Risk_weighted_payroll_threshold'];
            var factor = i === 0 ? pct_global._2016_17_Size_factor_division_constant : this['pct_risk_global_y' + (1 + i)]['_20' + (16 + i) + '_' + (17 + i) + '_Size_factor_division_constant'];

            pct_results.agency_size_factor[i] = (pct_results.risk_relativity[i] * pct_results.payroll_reassessment_window[i]) > thresh ? Math.max((pct_results.risk_relativity[i] * pct_results.payroll_reassessment_window[i] * (pct_results.r_win[i] / 4)) / ((pct_results.risk_relativity[i] * pct_results.payroll_reassessment_window[i] * (pct_results.r_win[i] / 4)) + factor), pct_global.Size_factor_minimum) : 0.1 * ((pct_results.risk_relativity[i] * pct_results.payroll_reassessment_window[i] * (pct_results.r_win[i] / 4)) / thresh);


            //Your agency performance adjustment
            pct_results.agency_performance_adjustment[i] = pct_results.agency_size_factor[i] * (pct_results.performance_ratio[i] - 1);


            //Your agency's prescribed rate (excl. GST)

            if (i === 0) {
                pct_results.prescribed_rate[i] = pct_results.itc == 1 ? ((pct_results.previous_fy_intial_rate[i] * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])) < pct_global.Scheme_minimum_premium_rate ? pct_global.Scheme_minimum_premium_rate : (pct_results.previous_fy_intial_rate[i] * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])).toFixed(4)) : ((vlook * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])) * pct_results.itc_adj < pct_global.Scheme_minimum_premium_rate ? pct_global.Scheme_minimum_premium_rate : (vlook * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i]) * pct_results.itc_adj).toFixed(4));
                //fill in previous year rate for second year
                var sec_p_r = $(".p_rate").eq(1);
                if (sec_p_r.val() === "") {
                    sec_p_r.val(pct_results.prescribed_rate[i]) * 100
                }
            } else {
                pct_results.prescribed_rate[i] = pct_results.itc == 1 ? ((pct_results.previous_fy_intial_rate[i] * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])) < pct_global.Scheme_minimum_premium_rate ? pct_global.Scheme_minimum_premium_rate : (pct_results.previous_fy_intial_rate[i] * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])).toFixed(4)) : (((pct_results.previous_fy_intial_rate[i] / pct_results.itc_adj) * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i])) * pct_results.itc_adj < pct_global.Scheme_minimum_premium_rate ? pct_global.Scheme_minimum_premium_rate : ((pct_results.previous_fy_intial_rate[i] / pct_results.itc_adj) * (1 + pct_results.adj_pool_tend[i]) * (1 + pct_results.agency_performance_adjustment[i]) * pct_results.itc_adj).toFixed(4));

            }


            //Your agency's payroll ($m)
            pct_results.payroll[i] = $(".pct_year_content_table").eq(i).find(".pct_agency_payroll").val() * 1;

            // Your agency's prescribed amount ($m) (excl. GST)
            pct_results.prescribed_amount[i] = pct_results.prescribed_rate[i] * pct_results.payroll[i];
            
            var table_result = $(".pct_results_conta").eq(i);
            table_result.slideDown(pct_global.section_toggle_speed);
            table_result.find(".prescribed_rate").html((pct_results.prescribed_rate[i]*100).toFixed(2)+"%");
            table_result.find(".prescribed_amount").html(pct_results.prescribed_amount[i].toFixed(3)+" ($m)");
            table_result.find(".penalty_bonus").html(pct_results.prescribed_amount[i].toFixed(3)+" ($m)");
        }
        
    }



    // Prepare financial years details on date change
    function prepare_FY() {

        var start = datereturned("/", pct_global.Reassessment_window_start_date);
        var end = datereturned("/", pct_global.Reassessment_window_end_date);
        var reassessment_period_days = new Date(end - start) / 1000 / 60 / 60 / 24 + 1;


        pct_results.coverage_start_date = $("#pct_date").val();
        var entered_date = datereturned(" ", pct_results.coverage_start_date);

        pct_results.itc = $("#pct_IT_rate").val() / 100;

        //Your agency's input tax credit adjustment
        pct_results.itc_adj = 1 - (((11 * 0.9228) / (11 - pct_results.itc)) / 11 * (1 - pct_results.itc));


        var entered_reassessment_period_days = new Date(entered_date - start) / 1000 / 60 / 60 / 24;

        //Years in the reassessment window that your agency participated in the Comcare scheme
        var reassessment_row = (reassessment_period_days - entered_reassessment_period_days) / 365;

        var r_win1 = reassessment_row > pct_global.Reassessment_window_years ? pct_global.Reassessment_window_years : reassessment_row;

        //Clear previous calculations
        pct_results.r_win = [];

        // Year 1 reassessment_windows
        pct_results.r_win.push(r_win1);

        $(".pct_table").eq(1).find(".pct_win").html(r_win1.toFixed(2));

        // Years 2-5 reassessment_window
        for (var i = 0; i < 4; i++) {
            var less4 = pct_results.r_win[i] + 1;
            var v = less4 > 4 ? 4 : less4;
            pct_results.r_win.push(v);
            $(".pct_table").eq(i + 2).find(".pct_win").html(v.toFixed(2));
        }

    }

    //END OF CALCULATIONS




    //TOGGLING FUNCTIONS

    // unlock/lock year toggles, as needed.
    function pct_lock(type, year) {
        var button = $(".year_toggle").eq(year - 1);
        var modifier = type == 1 ? "c" : "o";
        var Rmodifier = modifier == "c" ? "o" : "c";
        button.find(".pct_lock").removeClass("pct_lstatus_locked_" + Rmodifier).addClass("pct_lstatus_locked_" + modifier);
        button.find(".pct_year_name").removeClass("pct_year_name_" + Rmodifier).addClass("pct_year_name_" + modifier);
        button.find(".pct_year_toggle").removeClass("pct_year_toggle_" + Rmodifier).addClass("pct_year_toggle_" + modifier);
        button.attr("locked", type);

        if (type == 1 && button.parent().find(".pct_year_content:hidden").length < 1) {
            button.parent().find(".pct_year_content").slideUp(pct_global.section_toggle_speed);
        }
    }

    // toggle sections
    function toggle_callbackFn() {
        var arrow = $(this).parent().find('.pct_arrow:first');
        arrow.hasClass('rotate-it') ? arrow.removeClass('rotate-it') : arrow.addClass('rotate-it');
    }
    $('.pct_toggle').click(function() {
        if ($(this).attr("locked") == 1) {
            alert("LOCKED");
        } else {
            var type = $(this).attr("toggle");
            $(this).parent().find("." + type).stop().slideToggle(pct_global.section_toggle_speed, toggle_callbackFn);
        }
    });

    //END OF TOGGLING FUNCTIONS




    //DATEPICKER FUNCTIONS

    //calendar popup 
    $(".accCalendarConta").click(function() {
        $(".accCalendar").click();
    });

    //convert date string to array or date
    function datereturned(splitby, text, returnArray) {
        var comp = text.split(splitby);
        var d = parseInt(comp[0], 10);
        var m = comp[1].match(/[0-9]/i) ? parseInt(comp[1], 10) : monthNames.indexOf(comp[1]) + 1;
        var y = parseInt(comp[2], 10);
        if (returnArray == 1) {
            return [d, m, y];
        } else {
            return (new Date(Date.UTC(y, m - 1, d)));
        }
    }

    // convert date format 1/1/2013 ==> Tuesday January 1, 2013
    function convert_date_format(text) {
        var date = datereturned("/", text);
        return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
    }

    // END OF DATEPICKER FUNCTIONS





    //VALIDATIONS

    function validate_date(text) {
        var match = text.match(/\//g);
        var seperator = match ? "/" : " ";
        var new_date = datereturned(seperator, text);
        var RegEx = new RegExp("^([0-9]{1,2}[ ](" + monthNames.join("|") + ")[ ][0-9]{4})$", "g");

        if (!text.match(RegEx)) {
            return false;
        } else
        if (new_date < datereturned("/", "1/1/2012") || new_date > datereturned("/", "30/6/2015")) {
            return false;
        }

        if (match) {
            $("#pct_date").val(convert_date_format(text));
        }
        return true;
    }


    function validate_number(text) {
        if (text.match(/^[0-9\.]+$/g)) {
            return true;
        } else {
            return false;
        }
    }

    function validate_percentage(text) {
        var decimal = text.toString().split(".")[1];
        var has_dec = decimal ? decimal.length : 0;

        if (validate_number(text) && text <= 100 && text >= 0 && has_dec < 3) {
            return true;
        } else {
            return false;
        }
    }

    function validate_email(text) {
        var t = "([a-z0-9]){1,}([-]+[a-z0-9]+){0,}";
        if (text.match(new RegExp("^([\\w-.]{1,}[@](" + t + "\\.){1,}" + t + ")$", "g"))) {
            return true;
        } else {
            return false;
        }
    }


    function display_error(elem, err) {
        var error_content = "<div class='error_msg_conta'><div class='pct_error_msg_ico'></div> " + pct_global[err] + "</div>";
        var error = "<div class='pct_error_div'>" + error_content + "</div>";
        if (elem.parent().find(".pct_error_div").length) {
            elem.parent().find(".pct_error_div").html(error_content);
        } else {
            elem.parent().append(error);
            elem.parent().find(".pct_error_div").slideDown(pct_global.error_msg_toggle_speed);
        }
    }



    //inputs validation
    function pct_validation(elem) {

        var valu = elem.val().trim();
        elem.val(valu);

        if (elem.hasClass("pct_numeric") && !validate_number(valu)) {
            display_error(elem, "E_number");
        } else
        if (elem.hasClass("pct_percent") && !validate_percentage(valu)) {

            display_error(elem, "E_percent");
        } else
        if (elem.hasClass("pct_date") && !validate_date(valu)) {
            display_error(elem, "E_date");
        } else {
            var err_div = elem.parent().find(".pct_error_div");
            if (err_div.length) {
                err_div.remove();
            }
            return false;
        }
        return true;

    }



    // END OF VALIDATION


    /*

    function pct_calculate(elem) {
        if (pct_validation(elem)) {
            prepare_FY();
            calc_year(elem.attr("year") * 1);
        }
    }


    
    function intial_lock() {
        if ($(".pct_table").eq(0).find(".pct_error_div").length) {
            for (i = 1; i < 6; i++) {
                pct_lock(1, i);
            }
            return false;
        } else {
            prepare_FY();
            pct_lock(0, 1);
            return true;
        }
    }

    //unlock year1 and prepare variables when date and itc are entered.
    $("#pct_IT_rate").on("change paste", function() {

        intial_lock();
    });
*/

    //FIRE

    // check if year is valid to be calculated
    function check_inputs(eq) {
        var first_table = $(".pct_table").eq(eq);
        var global_errors = first_table.find(".pct_error_div").length ? first_table.find(".pct_error_div").length : 0;
        var inputs_length = first_table.find("input").length;
        var passed_inputs = 0;
    
        if (global_errors === 0) {
          
            first_table.find("input").each(function() {
                if ($(this).val() !== "") {
                   passed_inputs++;
                }
            });
        }
        if (passed_inputs == inputs_length) {
            return true;
        }
        return false;
    }
    
    $(".pct_parent input").on('change', function() {
        
        pct_validation($(this));
        
        //find last valid year to be calculated
        var eq = 0;
        for (var i = 0; i < 6; i++) {
           if(!check_inputs(i)){
               eq = i-1;
               break;
           }
        }
       
        if(eq>0){
            prepare_FY();
            calc_year(i-1);
        }
     

    });
    $("#pct_dp_td").click(function() {
        pct_validation($("#pct_date"));
    });

    pct_lock(0, 1);
    pct_lock(0, 2);
    
        pct_lock(0, 3);
    pct_lock(0, 4);
    pct_lock(0, 5);
}