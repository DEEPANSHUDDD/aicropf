// Define the dashboard data types
export interface DashboardData {
  soilData: {
    moisture: number;
    ph: number;
    npk: {
      nitrogen: number;
      phosphorus: number;
      potassium: number;
    };
    temperature: number;
    conductivity: number;
    organicMatter: number;
  };
  satelliteData: {
    ndvi: number;
    fieldBoundary: number;
    vegetationHealth: string;
    lastUpdated: string;
  };
  weatherData: {
    temperature: number;
    humidity: number;
    condition: string;
    forecast: Array<{
      day: string;
      high: number;
      low: number;
      icon: string;
    }>;
  };
  recommendations: Array<{
    id: string;
    crop: string;
    matchScore: number;
    expectedYield: string;
    profitMargin: string;
    waterRequirement: string;
    sustainability: string;
    marketDemand: string;
  }>;
  marketData: {
    currentPrice: number;
    weatherFavorability: number;
    riskAssessment: string;
    priceChange: number;
  };
}