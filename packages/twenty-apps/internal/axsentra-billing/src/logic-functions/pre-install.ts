import {
  definePreInstallLogicFunction,
  type InstallLogicFunctionPayload,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

const handler = async (
  payload: InstallLogicFunctionPayload,
): Promise<void> => {
  console.log(
    'Axsentra Billing pre-install executed',
    payload.previousVersion,
  );
};

export default definePreInstallLogicFunction({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.logicFunctions.preInstall.universalIdentifier,
  name: 'pre-install',
  description: 'Pre-install validation for Axsentra Billing',
  timeoutSeconds: 60,
  handler,
});
