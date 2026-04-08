import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineNavigationMenuItem({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.navigationMenuItems.contracts.universalIdentifier,
  name: 'Contracts',
  icon: 'IconFileDescription',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.views.allContracts.universalIdentifier,
});
