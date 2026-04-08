import {
  defineLogicFunction,
  type DatabaseEventPayload,
  type ObjectRecordCreateEvent,
} from 'twenty-sdk';
import { CoreApiClient } from 'twenty-client-sdk/core';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

type InvoiceRecord = {
  id: string;
  invoiceNumber?: string;
};

type InvoiceCreateEvent = DatabaseEventPayload<
  ObjectRecordCreateEvent<InvoiceRecord>
>;

const handler = async (
  event: InvoiceCreateEvent,
): Promise<object | undefined> => {
  const { recordId, properties } = event;
  const invoiceNumber = properties.after?.invoiceNumber;

  // Skip if invoice number is already set
  if (invoiceNumber) {
    return { skipped: true, reason: 'Invoice number already set' };
  }

  const now = new Date();
  const year = now.getFullYear();
  const timestamp = now.getTime();

  // Generate a sequential-style number using timestamp for uniqueness
  const sequence = String(timestamp % 100000).padStart(5, '0');
  const generatedNumber = `INV-${year}-${sequence}`;

  const client = new CoreApiClient();

  await client.mutation({
    updateInvoice: {
      __args: {
        id: recordId,
        data: {
          invoiceNumber: generatedNumber,
        },
      },
      id: true,
    },
  });

  return {
    generated: true,
    invoiceId: recordId,
    invoiceNumber: generatedNumber,
  };
};

export default defineLogicFunction({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.logicFunctions.generateInvoiceNumber
      .universalIdentifier,
  name: 'generate-invoice-number',
  description:
    'Auto-generates a sequential invoice number when an invoice is created',
  timeoutSeconds: 10,
  handler,
  databaseEventTriggerSettings: {
    eventName: 'invoice.created',
  },
});
