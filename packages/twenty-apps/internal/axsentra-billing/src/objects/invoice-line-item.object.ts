import {
  defineObject,
  FieldType,
  RelationType,
  OnDeleteAction,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

const ids = UNIVERSAL_IDENTIFIERS.objects.invoiceLineItem;

export default defineObject({
  universalIdentifier: ids.universalIdentifier,
  nameSingular: 'invoiceLineItem',
  namePlural: 'invoiceLineItems',
  labelSingular: 'Invoice Line Item',
  labelPlural: 'Invoice Line Items',
  description: 'An individual billable item on an invoice',
  icon: 'IconListDetails',
  labelIdentifierFieldMetadataUniversalIdentifier:
    ids.fields.description.universalIdentifier,
  fields: [
    {
      universalIdentifier: ids.fields.description.universalIdentifier,
      type: FieldType.TEXT,
      name: 'description',
      label: 'Description',
      description: 'Line item description',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: ids.fields.quantity.universalIdentifier,
      type: FieldType.NUMBER,
      name: 'quantity',
      label: 'Quantity',
      description: 'Number of units',
      icon: 'IconNumbers',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.unitPrice.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'unitPrice',
      label: 'Unit Price',
      description: 'Price per unit',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.amount.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'amount',
      label: 'Amount',
      description: 'Total line item amount (quantity * unitPrice)',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    // MANY_TO_ONE relation: InvoiceLineItem -> Invoice
    {
      universalIdentifier: ids.fields.invoice.universalIdentifier,
      type: FieldType.RELATION,
      name: 'invoice',
      label: 'Invoice',
      description: 'Parent invoice',
      icon: 'IconFileInvoice',
      relationTargetObjectMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoice.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoice.fields.lineItems
          .universalIdentifier,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.CASCADE,
        joinColumnName: 'invoiceId',
      },
    },
  ],
});
