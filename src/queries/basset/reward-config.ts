import { LCDClient } from '@terra-money/terra.js';
import { AddressProvider } from 'address-provider/provider';

interface Option {
  lcd: LCDClient;
}
interface ConfigResponse {
  hub_contract: string;
  reward_denom: string;
}

export const queryRewardConfig = ({ lcd }: Option) => async (
  addressProvider: AddressProvider,
): Promise<ConfigResponse> => {
  const bAssetContractAddress = addressProvider.bLunaReward();
  const response: ConfigResponse = await lcd.wasm.contractQuery(
    bAssetContractAddress,
    {
      config: {},
    },
  );
  return response;
};
