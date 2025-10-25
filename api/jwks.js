export default function handler(req, res) {
  const jwks = {
    keys: [
      {
	p: "_O6yv1mOkqtByqftJQw24MaYSp3zw7gM6dJZTyy4aFs-CSZw2MRLZECNPaqewbqxLjJbdhpTdZ6KFL7Zwz8eyQEMZ7qy7-8qxQ7qDq4mXGY2SWofdy_nAfBTqIVnhP7Qo7AS1lhl-LxrIo0j73NYMHl0ZpZW3huNzXEbvE_NiCc",
	kty: "RSA",
	q: "54k6xxo6PTKBh2pgytaRJUTbOO_auru7Pq_MtEuSQAUip43faDErfz6hr2lP0Mjddr7ETkhQ8agAckEoJzAivF7jffFf7qqAbES7uCqgW7UZ6-A-s-BHhEy40Yu9cqchC66xT_SWVHVjV1mGFUvkR8EW19hunCPoAdU3CBkkTv8",
	d: "OPH4BLIcOAWhOlgvRTq6D5_TyrssfjHEK3pbpspPnN3Gh2US0d-ONHncaU0viM3sxzSqWx1dAon7S10VY-LlP2hHU0ud0ZWRgFuqQciD5FP_aoye_BQkMxjWGWZW33R4ok-wBP9vyIsX6nsH7jqmPROLKCPTu_i_5591vGlghm00boG5kGWp0MZQyH2HJx1Zsn6qbf_HdXzT3yFTlIeDgToi5ZLxDDV9qu6W_6FoIGTJV_qwhYjtaSgqNchlMgQsmnGgfs9QKPwneXbN4CnBCHI9Lmm6XhCxoO7Nn_zeAf5nDJ5-ChVQpWBRQx53oFAsu0Vd48TkjjDeubVQbPWYyQ",
	e: "AQAB",
	kid: "fd42bb28-3094-40a9-aed9-a827db857adc",
	qi: "xC7dJmorO4_HPk998tXqUbPqOwY4yXfRI2uiI_LTisd4IuO3Xs_PZcBmLQaCf5KRj98JPYCT-D8gayVGY2olztJs7eFAU9biG-U_SKDl7JYLCfBcd0hhCExI1g7T3bV8jf-rYKWg0IZySS6u7_A8vN--p62GxdIWdDLn83RY2jE",
	dp: "vKt5Xk75kOJ6gybcOIRx8x1wwEgua1JBH7GuuOaM8BsPnVe1WZyi-DdGpDc_kRcnz2P04ZYlp1kJewwZ-BB_cER98mpLy7pF1xSW9zhkmQwNdpnYutlaohGY9d39KDHDhDZ09rqd5fr2l6FcquMJZ69Raqy-Q5OeJR84JzIICIU",
	dq: "hF4M72TMJM5qBNvJKE1Qv4jE96EQYC8RVj40_mIx403MSRQvw6ZQordQwjKnwcoD6m4XVlW7iNwuHSOo6_Z19VEeJ5NF7_Ej6EHHO_uKn8NCZXpW_oja-gTOqGWGUjTADKi7j-VZyEEwIPD6WdSAVpFKGO4QFk3kxp95jbSp8Es",
	n: "5ML5Gx4sqWCmtjz5Jim6zbiPhzfB4Ye14-tl_COglFfNnZLBX0m48mlm1R99yYpFkJvwzoC9TqoBRsbslqXqASdd_RiXWlhc_WnWOBhxb3FzEAmwvBo90JBCkcEsX7YPfBD75kGq8uUsfvanbCieTApMMhKz9ATUyjqllJb4320tPl8zERHAfrPfaB0I-MobkmCKgBBMQfLMlW_nILc_SGUF8GFOGG9Ksb9CqmzLmTH2hWoXrqVUEd85GplsDq1dzyJwteTYI8uGh09lumwJtV3KqFiYFpnKVgmJFLrbkq5BywCzKVq_aX89yqpQDLhr-u4PJ5rE1V96g-5PEbKA2Q"
}
    ]
  };

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.status(200).json(jwks);
}
