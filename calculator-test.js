
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


it("should handle an interest rate of 100%", function() {
  const values = {amount: 140000, years: 20, rate: 100};
  expect(calculateMonthlyPayment(values)).toEqual('11666.67');
});
