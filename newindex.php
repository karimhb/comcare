<!DOCTYPE html>
<html lang="en-US">


<head>


	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />



	<title>Premium Calculation Tool</title>


	<style type="text/css" media="screen">
		@import url(http://www.comcare.gov.au/__data/assets/file/0019/126154/base.css?v=0.1.102);
	</style>


	<style type="text/css" media="print">
		@import url(http://www.comcare.gov.au/__data/assets/file/0019/128107/printstyle.css?v=0.1.4);
	</style>

	<link href='//fonts.googleapis.com/css?family=Raleway:400,500,600,200,700' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="http://www.comcare.gov.au/__data/assets/js_file/0004/140395/jquery-min.js?v=0.1.5"></script>
	<script type="text/javascript" src="http://www.comcare.gov.au/__data/assets/js_file/0005/140396/jquery-ui-min.js?v=0.1.2"></script>

	<!--[if lt IE 9]>
<script type="text/javascript" src="http://www.comcare.gov.au/__data/assets/js_file/0017/126440/css3-mediaqueries.js?v=0.1.4"></script>
<![endif]-->


	<link href="http://www.comcare.gov.au/__data/assets/css_file/0016/126322/sm-core-css.css?v=0.1.18" rel="stylesheet" type="text/css" />
	<link href="http://www.comcare.gov.au/__data/assets/css_file/0017/126323/sm-blue.css?v=0.1.62" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" media="screen" href="http://www.comcare.gov.au/__data/assets/css_file/0020/127181/12.0.0.css?v=0.1.11" type="text/css" />


</head>

<!-- DELETE EVERY THING ABOVE -->

	
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script type="text/javascript" src="script.js"></script>
	<script src="datepick.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			PremiumCalculator();
		});
	</script>

	
<p>The Comcare scheme is an integrated safety, rehabilitation and compensation system for federal workers and their employers, regardless of which state or territory they operate in, or where workers are based.</p>

<h2>What is Comcare&rsquo;s scheme about?</h2>

<p>Our scheme:</p>

<ul>
	<li>Works in partnership with employers and workers to prevent workplace injuries and diseases.</li>

	<li>Uses regulatory sanctions if there is a demonstrable failure of the employer&rsquo;s duty of care.</li>

	<li>Encourages employers to work with their employees to support injured workers in the workplace or to achieve an early, safe and long-lasting return to work.</li>

	<li>Gives employers a duty to provide injured workers with suitable employment.</li>

	<li>Provides injured workers with a statutory package of economic and non-economic benefits, such as:

		<ul>
			<li>a high standard of income support (until retirement of age if necessary)</li>

			<li>medical assistance, household services, permanent impairment benefits, aids and certain alterations.</li>
		</ul>
	</li>
</ul>



<section class="pct_parent">


	<div class="pct_section">
		<button role="button" class="pct_section_title pct_toggle" toggle="pct_section_content">
Your Agency Details<span class="pct_title_arrow pct_arrow rotate-it"></span>
</button>
		<div class="pct_section_content">

			<table class="pct_table">
				<tr>
					<td>
						Coverage start date <button class='pct_tt' msg='M_date'></button>
					</td>
					<td id="pct_dp_td">

						<input placeholder="dd/mm/yyyy" id="pct_date" class="pct_date" type="text" value="1 Jan 2012" name="date" />
						<span id="pct_dateIcon" class="accCalendar datePicker"></span>
						<div class="accCalendarContaConta">
							<button role="button" aria-describedby="select date" href="#" class="accCalendarConta"></button>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="2" class="msg_toggle_conta">
						<div class="msg_toggle"></div>
					</td>
				</tr>
				<tr>
					<td>
						Input tax credit percentage
					</td>
					<td>
						<div class="pct_per">
							<input type="text" id="pct_IT_rate" class="pct_percent" value="100" />
						</div>
					</td>
				</tr>


			</table>



			<div>

				<button role="button" class="pct_toggle year_toggle" toggle="pct_year_content" locked="1">
                    <div class="pct_years_item" >
                       <div class="pct_lock pct_lstatus_locked_c"></div>
                       <div class="pct_year_name pct_year_name_c This_FY"></div>
                        <div class="pct_year_toggle pct_arrow pct_year_toggle_c rotate-it"></div>
                    </div>
                </button>
				<div class="pct_year_content">

					<div class="pct_year_content_table ">
						<table class="pct_table">

							<tr>
								<td>
									<span class="This_FY_D3"></span> Payroll <button class='pct_tt' msg='M_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_agency_payroll pct_numeric" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									<span class="This_FY_P1"></span> intial prescribed rate <button class='pct_tt' msg='M_prescribed_rate'></button>
								</td>
								<td>
									<div class="pct_per">
										<input type="text" class="p_rate pct_percent" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>


							<tr>
								<td colspan="2" class="reassessment_w_td">
									Reassessment window is <span class="pct_win"></span> years <button class='pct_tt' msg='M_reassessment_window'></button>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average payroll over the reassessment window <button class='pct_tt' msg='M_reassessment_window_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_pay_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average incurred cost over the reassessment window <button class='pct_tt' msg='M_reassessment_window_cost'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_cost_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

						</table>
						<table class="pct_results_conta">
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results prescribed_rate"></span>
								</td>
							</tr>
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results  prescribed_amount"></span>
								</td>
							</tr>
						</table>

					</div>
				</div>
			</div>


			<div>

				<button role="button" class="pct_toggle year_toggle" toggle="pct_year_content" locked="1">
                    <div class="pct_years_item" >
                       <div class="pct_lock pct_lstatus_locked_c"></div>
                       <div class="pct_year_name pct_year_name_c This_FY"></div>
                        <div class="pct_year_toggle pct_arrow pct_year_toggle_c"></div>
                    </div>
                </button>
				<div class="pct_year_content hideonoad">

					<div class="pct_year_content_table">
						<table class="pct_table">

							<tr>
								<td>
									<span class="This_FY_D3"></span> Payroll <button class='pct_tt' msg='M_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_agency_payroll pct_numeric" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									<span class="This_FY_P2"></span> intial prescribed rate <button class='pct_tt' msg='M_prescribed_rate'></button>
								</td>
								<td>
									<div class="pct_per">
										<input type="text" class="p_rate pct_percent" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td>
									Adjustment due to pool trend <button class='pct_tt' msg='M_pool_trend'></button>
								</td>
								<td>
									<div>
										<select type="text" class="pool_trend_adj">
	</select>
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="reassessment_w_td">
									Reassessment window is <span class="pct_win"></span> years <button class='pct_tt' msg='M_reassessment_window'></button>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average payroll over the reassessment window <button class='pct_tt' msg='M_reassessment_window_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_pay_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average incurred cost over the reassessment window <button class='pct_tt' msg='M_reassessment_window_cost'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_cost_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

						</table>
						<table class="pct_results_conta">
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results prescribed_rate"></span>
								</td>
							</tr>
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results  prescribed_amount"></span>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div>

				<button role="button" class="pct_toggle year_toggle" toggle="pct_year_content" locked="1">
                    <div class="pct_years_item" >
                       <div class="pct_lock pct_lstatus_locked_c"></div>
                       <div class="pct_year_name pct_year_name_c This_FY"></div>
                        <div class="pct_year_toggle pct_arrow pct_year_toggle_c"></div>
                    </div>
                </button>
				<div class="pct_year_content hideonoad">

					<div class="pct_year_content_table">
						<table class="pct_table">

							<tr>
								<td>
									<span class="This_FY_D3"></span> Payroll <button class='pct_tt' msg='M_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_agency_payroll pct_numeric" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>


							<tr>
								<td>
									Adjustment due to pool trend <button class='pct_tt' msg='M_pool_trend'></button>
								</td>
								<td>
									<div>
										<select type="text" class="pool_trend_adj">
	</select>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="reassessment_w_td">
									Reassessment window is <span class="pct_win"></span> years <button class='pct_tt' msg='M_reassessment_window'></button>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average payroll over the reassessment window <button class='pct_tt' msg='M_reassessment_window_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_pay_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td>
									Average incurred cost over the reassessment window <button class='pct_tt' msg='M_reassessment_window_cost'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_cost_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>


						</table>
						<table class="pct_results_conta">
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results prescribed_rate"></span>
								</td>
							</tr>
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results  prescribed_amount"></span>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div>

				<button role="button" class="pct_toggle year_toggle" toggle="pct_year_content" locked="1">
                    <div class="pct_years_item" >
                       <div class="pct_lock pct_lstatus_locked_c"></div>
                       <div class="pct_year_name pct_year_name_c This_FY"></div>
                        <div class="pct_year_toggle pct_arrow pct_year_toggle_c"></div>
                    </div>
                </button>
				<div class="pct_year_content hideonoad">

					<div class="pct_year_content_table">
						<table class="pct_table">

							<tr>
								<td>
									<span class="This_FY_D3"></span> Payroll <button class='pct_tt' msg='M_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_agency_payroll pct_numeric" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Adjustment due to pool trend <button class='pct_tt' msg='M_pool_trend'></button>
								</td>
								<td>
									<div>
										<select type="text" class="pool_trend_adj">
	</select>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="reassessment_w_td">
									Reassessment window is <span class="pct_win"></span> years <button class='pct_tt' msg='M_reassessment_window'></button>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average payroll over the reassessment window <button class='pct_tt' msg='M_reassessment_window_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_pay_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td>
									Average incurred cost over the reassessment window <button class='pct_tt' msg='M_reassessment_window_cost'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_cost_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>


						</table>
						<table class="pct_results_conta">
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results prescribed_rate"></span>
								</td>
							</tr>
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results  prescribed_amount"></span>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div>

				<button role="button" class="pct_toggle year_toggle" toggle="pct_year_content" locked="1">
                    <div class="pct_years_item" >
                       <div class="pct_lock pct_lstatus_locked_c"></div>
                       <div class="pct_year_name pct_year_name_c This_FY"></div>
                        <div class="pct_year_toggle pct_arrow pct_year_toggle_c"></div>
                    </div>
                </button>
				<div class="pct_year_content hideonoad">

					<div class="pct_year_content_table">
						<table class="pct_table">

							<tr>
								<td>
									<span class="This_FY_D3"></span> Payroll <button class='pct_tt' msg='M_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_agency_payroll pct_numeric" />
									</div>
								</td>
							</tr>

							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>


							<tr>
								<td>
									Adjustment due to pool trend <button class='pct_tt' msg='M_pool_trend'></button>
								</td>
								<td>
									<div>
										<select type="text" class="pool_trend_adj">
	</select>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="reassessment_w_td">
									Reassessment window is <span class="pct_win"></span> years <button class='pct_tt' msg='M_reassessment_window'></button>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>

							<tr>
								<td>
									Average payroll over the reassessment window <button class='pct_tt' msg='M_reassessment_window_payroll'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_pay_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>
							<tr>
								<td>
									Average incurred cost over the reassessment window <button class='pct_tt' msg='M_reassessment_window_cost'></button>
								</td>
								<td>
									<div class="pct_mdollar">
										<input type="text" class="pct_avg_cost_AP pct_numeric" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="msg_toggle_conta">
									<div class="msg_toggle"></div>
								</td>
							</tr>



						</table>
						<table class="pct_results_conta">
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results prescribed_rate"></span>
								</td>
							</tr>
							<tr>
								<td>
									Your agency prescribed rate (excl. GST)
								</td>
								<td>
									<span class="pct_results  prescribed_amount"></span>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>

		</div>
	</div>



	<div class="pct_section">
		<button role="button" class="pct_section_title pct_toggle" toggle="pct_section_content">
Instant Compare<span class="pct_title_arrow pct_arrow rotate-it"></span>
</button>
		<div class="pct_section_content hideonoad">
			Premium comparisons require more than one year prescribed amount to be calculated in the Financial Year Details section above.
			<br><br>
			<select>
				<option>2016-2017</option>
				<option>2017-2018</option>
				<option>2018-2019</option>
				<option>2019-2020</option>
				<option>2021-2022</option>
			</select> fancy tables goes here

		</div>
	</div>


	<div class="pct_section">
		<button role="button" class="pct_section_title pct_toggle" toggle="pct_section_content">
Keep Results<span class="pct_title_arrow pct_arrow rotate-it"></span>
</button>
		<div class="pct_section_content">
			<input style="width:120px; margin-right:30px"><button>Email Results</button>
		</div>
	</div>
	<br><br><br><br>
	<div class="pct_disclaimer">

		Disclaimer (source: CALM Legal) Comcare has developed this calculation tool to assist agencies to understand the calculation of their premium and rate. In using this calculation tool, you acknowledge the following: ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Comcare does not give any warranties or&nbsp; representations in relation to the accuracy, reliability or completeness of the results generated by the calculation tool; ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; the results generated by the calculation
		tool are provided as a guide only and must in no way be regarded as a formal or future premium rate. There will be some variation between the results and actual premium rates due to the effects of rounding; and ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Comcare, its officers, employees, agents or advisers do not accept any liability for any loss whatsoever (including without limitation any liability arising from any fault or negligence on their part) arising from the use of this calculation tool or
		the results generated.

	</div>
	<br /><br /><br /><br /><br /><br /><br /><br /><br />
</section>