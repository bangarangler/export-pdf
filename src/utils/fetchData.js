export const financialIncomeStatementURL = "http://unicorn.nowigence.ai/quandl_financial_income_statement?ticker=TTL&year_or_quarter=year&n_periods=4"

export const stockOverviewURL = "http://unicorn.nowigence.ai/quandl_overview_page?ticker=AAPL&stock_freq_period=quarter&stock_len_period=one_year&rev_freq_period=quarter&rev_len_period=one_year"

export const fetchData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
};
