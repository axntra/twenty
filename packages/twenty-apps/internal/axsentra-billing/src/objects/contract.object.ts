import {
  defineObject,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

enum ContractType {
  SOFTWARE_LICENSE = 'SOFTWARE_LICENSE',
  SUPPORT = 'SUPPORT',
  IMPLEMENTATION = 'IMPLEMENTATION',
}

enum ContractStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}

enum BillingFrequency {
  ONE_TIME = 'ONE_TIME',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  ANNUAL = 'ANNUAL',
}

const ids = UNIVERSAL_IDENTIFIERS.objects.contract;

export default defineObject({
  universalIdentifier: ids.universalIdentifier,
  nameSingular: 'contract',
  namePlural: 'contracts',
  labelSingular: 'Contract',
  labelPlural: 'Contracts',
  description:
    'A software license, support agreement, or implementation engagement',
  icon: 'IconFileDescription',
  labelIdentifierFieldMetadataUniversalIdentifier:
    ids.fields.name.universalIdentifier,
  fields: [
    {
      universalIdentifier: ids.fields.name.universalIdentifier,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      description: 'Contract title',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: ids.fields.contractNumber.universalIdentifier,
      type: FieldType.TEXT,
      name: 'contractNumber',
      label: 'Contract Number',
      description: 'Unique identifier (e.g., AX-2026-001)',
      icon: 'IconHash',
    },
    {
      universalIdentifier: ids.fields.type.universalIdentifier,
      type: FieldType.SELECT,
      name: 'type',
      label: 'Type',
      description: 'Contract type',
      icon: 'IconCategory',
      options: [
        {
          id: '4801e4c2-3d1b-4940-8414-b7729fa4a196',
          value: ContractType.SOFTWARE_LICENSE,
          label: 'Software License',
          position: 0,
          color: 'blue',
        },
        {
          id: 'c2352fe0-7301-4d24-b3ce-4fc12d7db67d',
          value: ContractType.SUPPORT,
          label: 'Support',
          position: 1,
          color: 'green',
        },
        {
          id: 'ac7b09ff-80ef-422b-b885-2052eeaa7c66',
          value: ContractType.IMPLEMENTATION,
          label: 'Implementation',
          position: 2,
          color: 'purple',
        },
      ],
    },
    {
      universalIdentifier: ids.fields.status.universalIdentifier,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Contract status',
      icon: 'IconStatusChange',
      defaultValue: `'${ContractStatus.DRAFT}'`,
      options: [
        {
          id: 'c979f906-4ce3-40aa-b98a-4b74bb632e6a',
          value: ContractStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          id: 'de9d4cd7-b1da-46e9-bb2e-e98cd43ec44f',
          value: ContractStatus.ACTIVE,
          label: 'Active',
          position: 1,
          color: 'green',
        },
        {
          id: '487d53ca-e0c4-4552-b8b6-032b3dea1009',
          value: ContractStatus.EXPIRED,
          label: 'Expired',
          position: 2,
          color: 'orange',
        },
        {
          id: '1a9d1e36-3c66-4926-a755-7d720760179b',
          value: ContractStatus.CANCELLED,
          label: 'Cancelled',
          position: 3,
          color: 'red',
        },
      ],
    },
    {
      universalIdentifier: ids.fields.startDate.universalIdentifier,
      type: FieldType.DATE,
      name: 'startDate',
      label: 'Start Date',
      description: 'Contract start date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.endDate.universalIdentifier,
      type: FieldType.DATE,
      name: 'endDate',
      label: 'End Date',
      description: 'Contract end date (null for perpetual)',
      icon: 'IconCalendarEvent',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.totalValue.universalIdentifier,
      type: FieldType.CURRENCY,
      name: 'totalValue',
      label: 'Total Value',
      description: 'Total contract value',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: ids.fields.billingFrequency.universalIdentifier,
      type: FieldType.SELECT,
      name: 'billingFrequency',
      label: 'Billing Frequency',
      description: 'How often the contract is billed',
      icon: 'IconRepeat',
      options: [
        {
          id: '8f7bf4e5-db8f-4364-b059-786ac8838be2',
          value: BillingFrequency.ONE_TIME,
          label: 'One-Time',
          position: 0,
          color: 'gray',
        },
        {
          id: '70db64e7-3ace-47ad-932c-ab081e2c311d',
          value: BillingFrequency.MONTHLY,
          label: 'Monthly',
          position: 1,
          color: 'blue',
        },
        {
          id: 'b1f5245b-2bef-4398-8108-36ea3f58e6fe',
          value: BillingFrequency.QUARTERLY,
          label: 'Quarterly',
          position: 2,
          color: 'purple',
        },
        {
          id: '257420c6-ceaf-41f7-9a68-54349425578d',
          value: BillingFrequency.ANNUAL,
          label: 'Annual',
          position: 3,
          color: 'green',
        },
      ],
    },
    {
      universalIdentifier: ids.fields.notes.universalIdentifier,
      type: FieldType.RICH_TEXT,
      name: 'notes',
      label: 'Notes',
      description: 'Internal notes',
      icon: 'IconNotes',
    },
    // MANY_TO_ONE relation: Contract -> Company
    {
      universalIdentifier: ids.fields.company.universalIdentifier,
      type: FieldType.RELATION,
      name: 'company',
      label: 'Company',
      description: 'Customer company',
      icon: 'IconBuildingSkyscraper',
      relationTargetObjectMetadataUniversalIdentifier:
        STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.fields.contractsOnCompany.universalIdentifier,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'companyId',
      },
    },
    // MANY_TO_ONE relation: Contract -> Person (primary contact)
    {
      universalIdentifier: ids.fields.contact.universalIdentifier,
      type: FieldType.RELATION,
      name: 'contact',
      label: 'Contact',
      description: 'Primary contact for this contract',
      icon: 'IconUser',
      relationTargetObjectMetadataUniversalIdentifier:
        STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.fields.contractsOnPerson.universalIdentifier,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'contactId',
      },
    },
    // ONE_TO_MANY relation: Contract -> Invoices
    {
      universalIdentifier: ids.fields.invoices.universalIdentifier,
      type: FieldType.RELATION,
      name: 'invoices',
      label: 'Invoices',
      description: 'Invoices generated from this contract',
      icon: 'IconFileInvoice',
      relationTargetObjectMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoice.universalIdentifier,
      relationTargetFieldMetadataUniversalIdentifier:
        UNIVERSAL_IDENTIFIERS.objects.invoice.fields.contract
          .universalIdentifier,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
