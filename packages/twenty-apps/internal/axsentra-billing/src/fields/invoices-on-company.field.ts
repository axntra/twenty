import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineField({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.fields.invoicesOnCompany.universalIdentifier,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'invoices',
  label: 'Invoices',
  description: 'Invoices billed to this company',
  icon: 'IconFileInvoice',
  relationTargetObjectMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.invoice.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.invoice.fields.company.universalIdentifier,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
