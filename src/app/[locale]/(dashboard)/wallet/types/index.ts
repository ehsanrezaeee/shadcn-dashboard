export interface WalletAmountsDataType {
    key: React.Key;
    amount: string;
    en_name: string;
    fa_name: string;
    freeze_amount: string;
    available_amount: string;
    estimated_amount: string;
    change: {
      percent: string;
      amount: string;
      type: string;
    };
  }
  