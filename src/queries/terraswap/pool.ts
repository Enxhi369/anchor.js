import { LCDClient } from '@terra-money/terra.js';

interface Option {
  lcd: LCDClient;
  pair_contract_address: string;
}
interface PoolResponse {
  assets: Asset[];
  total_share: string;
}

interface Asset {
  info: string;
  amount: string;
}

export const queryTerraswapPool = async ({
  lcd,
  pair_contract_address,
}: Option): Promise<PoolResponse> => {
  const response: PoolResponse = await lcd.wasm.contractQuery(
    pair_contract_address,
    {
      pool: {},
    },
  );
  return response;
};
