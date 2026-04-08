import { defineView, ViewKey } from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

const ids = UNIVERSAL_IDENTIFIERS;
const contractFields = ids.objects.contract.fields;
const viewFields = ids.viewFields;

export default defineView({
  universalIdentifier: ids.views.allContracts.universalIdentifier,
  name: 'All Contracts',
  objectUniversalIdentifier: ids.objects.contract.universalIdentifier,
  icon: 'IconFileDescription',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      universalIdentifier: viewFields.contractName.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.name.universalIdentifier,
      position: 0,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: viewFields.contractNumber.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.contractNumber.universalIdentifier,
      position: 1,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: viewFields.contractType.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.type.universalIdentifier,
      position: 2,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: viewFields.contractStatus.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.status.universalIdentifier,
      position: 3,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: viewFields.contractCompany.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.company.universalIdentifier,
      position: 4,
      isVisible: true,
      size: 160,
    },
    {
      universalIdentifier: viewFields.contractTotalValue.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.totalValue.universalIdentifier,
      position: 5,
      isVisible: true,
      size: 130,
    },
    {
      universalIdentifier: viewFields.contractStartDate.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        contractFields.startDate.universalIdentifier,
      position: 6,
      isVisible: true,
      size: 120,
    },
  ],
});
