import {
  defineObject,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

enum InvoiceStatus {
  DRAFT = 'DRAFT',
  SENT = 'SENT',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  VOID = 'VOID',
}

const ids = UNIVERSAL_IDENTIFIERS.objects.invoice;

export default defineObject({
  universalIdentifier: ids.universalIdentifier,
  nameSingular: 'invoice',
  namePlural: 'invoices',
  labelSingular: 'Invoice',
  labelPlural: 'Invoices',
  description: 'A billing document sent to a customer',
  icon: 'IconFileInvoice',
  labelIdentifierFieldMetadataUniversalIdentifier:
    ids.fields.invoiceNumber.universalIdentifier,
  fields: [
    {
      universalIdentifier: ids.fields.invoiceNumber.universalIdentifier,
      type: FieldType.TEXT,
      name: 'invoiceNumber',
      label: 'Invoice Number',
      description: 'Auto-generated invoice number (e.g., INV-2026-0042)',
      icon: 'IconHash',
    },
    {
      universalIdentifier: ids.fields.status.universalIdentifier,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Invoice status',
      icon: 'IconStatusChange',
      defaultValue: `'${InvoiceStatus.DRAFT}'`,
      options: [
        {
          id: 'cc466eb9-4412-486a-b158-a89f67fb5f64',
          value: InvoiceStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          id: '06ce4d6a-bf70-4fd0-b492-b0f583afc27d',
          value: InvoiceStatus.SENT,
          label: 'Sent',
          position: 1,
          color: 'blue',
        },
        {
          id: '54935065-e0ca-46b3-bfba-4cdb7a0b9d38',
          value: InvoiceStatus.PAID,
          label: 'Paid',
          position: 2,
          color: 'green',
        },
        {
          id: '7ac1581c-8c1b-4727-b1d6-3a63fbe67149',
          value: InvoiceStatus.OVERDUE,
          label: 'Overdue',
          position: 3,
          color: 'red',
        },
        {
          id: '4f9776af-c2b1-417c-9fd5-c5c6292cbb61',
          value: InvoiceStatus.VOID,
          label: 'Void',
          position: 4,
          color: 'orange',
        },
      ],
    },
    {
      universalIdentifier: ids.fields.issueDate.universalIdentifier,
      type: FieldType.DATE,
      name: 'issueDate',
      label: 'Issue Date',
      description: 'Date invoice was issued',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.dueDate.universalIdentifier,
      type: FieldType.DATE,
      name: 'dueDate',
      label: 'Due Date',
      description: 'Payment due date',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.subtotal.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'subtotal',
      label: 'Subtotal',
      description: 'Sum of line items before tax',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.taxRate.universalIdentifier,
      type: FieldType.NUMBER,
      name: 'taxRate',
      label: 'Tax Rate',
      description: 'Tax percentage',
      icon: 'IconPercentage',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.taxAmount.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'taxAmount',
      label: 'Tax Amount',
      description: 'Calculated tax amount',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.totalAmount.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'totalAmount',
      label: 'Total Amount',
      description: 'Final amount due',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.paidAmount.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'paidAmount',
      label: 'Paid Amount',
      description: 'Amount received',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.paidDate.universalIdentifier,
      type: FieldType.DATE,
      name: 'paidDate',
      label: 'Paid Date',
      description: 'Date payment was received',
      icon: 'IconCalendarCheck',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.notes.universalIdentifier,
      type: FieldType.RICH_TEXT,
      name: 'notes',
      label: 'Notes',
      description: 'Invoice notes and payment terms',
      icon: 'IconNotes',
    },
    // MANY_TO_ONE relation: Invoice -> Company
    {
      universalIdentifier: ids.fields.company.universalIdentifier,
      type: FieldType.RELATION,
      name: 'company',
      label: 'Company',
      description: 'Billed customer',
      icon: 'IconBuildingSkyscraper',
      relationTargetObjectMetadataUniversalIdentifier:
        STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.fields.invoicesOnCompany.universalIdentifier,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'companyId',
      },
    },
    // MANY_TO_ONE relation: Invoice -> Contract
    {
      universalIdentifier: ids.fields.contract.universalIdentifier,
      type: FieldType.RELATION,
      name: 'contract',
      label: 'Contract',
      description: 'Source contract',
      icon: 'IconFileDescription',
      relationTargetObjectMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.contract.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.contract.fields.invoices
          .universalIdentifier,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'contractId',
      },
    },
    // ONE_TO_MANY relation: Invoice -> LineItems
    {
      universalIdentifier: ids.fields.lineItems.universalIdentifier,
      type: FieldType.RELATION,
      name: 'lineItems',
      label: 'Line Items',
      description: 'Invoice line items',
      icon: 'IconList',
      relationTargetObjectMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoiceLineItem.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoiceLineItem.fields.invoice
          .universalIdentifier,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
