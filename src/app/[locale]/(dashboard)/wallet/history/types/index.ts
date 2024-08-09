export interface HistoryDataType {
  name?: string;
  network?: string;
  tx_id?: string;
  to?: string;
  key: React.Key;
  created_at: string;
  amount: string;
  fee_amount: string;
  type_en?: string;
  type_fa?: string;
  deposit_amount?: string;
  shaba_number?: string;
  card_number?: string;
  peigiri_code: string;
  status: string;
}
