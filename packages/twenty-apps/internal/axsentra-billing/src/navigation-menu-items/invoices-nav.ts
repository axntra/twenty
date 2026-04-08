import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineNavigationMenuItem({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.navigationMenuItems.invoices.universalIdentifier,
  name: 'Invoices',
  icon: 'IconFileInvoice',
  position: 1,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.views.allInvoices.universalIdentifier,
});
