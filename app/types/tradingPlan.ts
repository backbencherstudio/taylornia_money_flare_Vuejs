export interface TradingPlan {
  name: string;
  price: number;
  duration: number;
  dailyProfit: number;
  totalNetProfit: number;
  referralReward: number;
  principalRefund: boolean;
}

export interface TradingPlanInstruction {
  title: string;
  description: string;
}
