import { defineView, ViewKey } from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

const ids = UNIVERSAL_IDENTIFIERS;
const invoiceFields = ids.objects.invoice.fields;
const viewFields = ids.viewFields;

export default defineView({
  universalIdentifier: ids.views.allInvoices.universalIdentifier,
  name: 'All Invoices',
  objectUniversalIdentifier: ids.objects.invoice.universalIdentifier,
  icon: 'IconFileInvoice',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      universalIdentifier: viewFields.invoiceNumber.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.invoiceNumber.universalIdentifier,
      position: 0,
      isVisible: true,
      size: 160,
    },
    {
      universalIdentifier: viewFields.invoiceStatus.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.status.universalIdentifier,
      position: 1,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: viewFields.invoiceCompany.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.company.universalIdentifier,
      position: 2,
      isVisible: true,
      size: 160,
    },
    {
      universalIdentifier: viewFields.invoiceTotalAmount.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.totalAmount.universalIdentifier,
      position: 3,
      isVisible: true,
      size: 130,
    },
    {
      universalIdentifier: viewFields.invoiceIssueDate.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.issueDate.universalIdentifier,
      position: 4,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: viewFields.invoiceDueDate.universalIdentifier,
      fieldMetadataUniversalIdentifier:
        invoiceFields.dueDate.universalIdentifier,
      position: 5,
      isVisible: true,
      size: 120,
    },
  ],
});
