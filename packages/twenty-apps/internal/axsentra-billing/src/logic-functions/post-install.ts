import {
  definePostInstallLogicFunction,
  type InstallLogicFunctionPayload,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

const handler = async (
  payload: InstallLogicFunctionPayload,
): Promise<void> => {
  console.log(
    'Axsentra Billing post-install completed successfully',
    payload.previousVersion,
  );
};

export default definePostInstallLogicFunction({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.logicFunctions.postInstall.universalIdentifier,
  name: 'post-install',
  description: 'Post-install setup for Axsentra Billing',
  timeoutSeconds: 300,
  handler,
});
