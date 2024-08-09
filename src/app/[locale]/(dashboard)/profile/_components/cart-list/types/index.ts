export interface BankAccount {
  id: string;
  bankSwiftCode: string;
  card_number: string;
  iban_number: string;
  isDefault: boolean;
  isActive: string;
  ownerName: string;
  verifiedAt: number;
}

export interface BankTypes {
  card_no: number;
  bank_name: string;
  bank_title: string;
  bank_logo: string;
  color: string;
}
