class FinancialForecast{
     public static double forecastRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecastRecursive(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 10000;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;

        double futureValue = forecastRecursive(initialValue, annualGrowthRate, forecastYears);
        System.out.printf("Forecasted Value after %d years: ₹%.2f\n", forecastYears, futureValue);
    }
}