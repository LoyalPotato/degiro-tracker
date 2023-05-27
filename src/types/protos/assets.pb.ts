/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "../google/protobuf/timestamp.pb.js";

/** Some are missing and it's col position */
export interface ImportedRow {
  date: Date | undefined;
  hour: string;
  product: string;
  isin: string;
  description: string;
  currency: string;
  value: number;
  valueCurrency: string;
  balance: number;
  orderId: string;
}

export interface ImportedFile {
  importedRows: ImportedRow[];
}

export interface LastImportDate {
  lastImportDate: Date | undefined;
}

function createBaseImportedRow(): ImportedRow {
  return {
    date: undefined,
    hour: "",
    product: "",
    isin: "",
    description: "",
    currency: "",
    value: 0,
    valueCurrency: "",
    balance: 0,
    orderId: "",
  };
}

export const ImportedRow = {
  encode(message: ImportedRow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(18).fork()).ldelim();
    }
    if (message.hour !== "") {
      writer.uint32(34).string(message.hour);
    }
    if (message.product !== "") {
      writer.uint32(42).string(message.product);
    }
    if (message.isin !== "") {
      writer.uint32(10).string(message.isin);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.currency !== "") {
      writer.uint32(82).string(message.currency);
    }
    if (message.value !== 0) {
      writer.uint32(64).sint64(message.value);
    }
    if (message.valueCurrency !== "") {
      writer.uint32(74).string(message.valueCurrency);
    }
    if (message.balance !== 0) {
      writer.uint32(56).sint64(message.balance);
    }
    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportedRow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportedRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hour = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.product = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.value = longToNumber(reader.sint64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.valueCurrency = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.balance = longToNumber(reader.sint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportedRow {
    return {
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      hour: isSet(object.hour) ? String(object.hour) : "",
      product: isSet(object.product) ? String(object.product) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      description: isSet(object.description) ? String(object.description) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
      valueCurrency: isSet(object.valueCurrency) ? String(object.valueCurrency) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
    };
  },

  toJSON(message: ImportedRow): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.hour !== undefined && (obj.hour = message.hour);
    message.product !== undefined && (obj.product = message.product);
    message.isin !== undefined && (obj.isin = message.isin);
    message.description !== undefined && (obj.description = message.description);
    message.currency !== undefined && (obj.currency = message.currency);
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.valueCurrency !== undefined && (obj.valueCurrency = message.valueCurrency);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ImportedRow>, I>>(base?: I): ImportedRow {
    return ImportedRow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ImportedRow>, I>>(object: I): ImportedRow {
    const message = createBaseImportedRow();
    message.date = object.date ?? undefined;
    message.hour = object.hour ?? "";
    message.product = object.product ?? "";
    message.isin = object.isin ?? "";
    message.description = object.description ?? "";
    message.currency = object.currency ?? "";
    message.value = object.value ?? 0;
    message.valueCurrency = object.valueCurrency ?? "";
    message.balance = object.balance ?? 0;
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseImportedFile(): ImportedFile {
  return { importedRows: [] };
}

export const ImportedFile = {
  encode(message: ImportedFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.importedRows) {
      ImportedRow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportedFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportedFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.importedRows.push(ImportedRow.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportedFile {
    return {
      importedRows: Array.isArray(object?.importedRows)
        ? object.importedRows.map((e: any) => ImportedRow.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportedFile): unknown {
    const obj: any = {};
    if (message.importedRows) {
      obj.importedRows = message.importedRows.map((e) => e ? ImportedRow.toJSON(e) : undefined);
    } else {
      obj.importedRows = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImportedFile>, I>>(base?: I): ImportedFile {
    return ImportedFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ImportedFile>, I>>(object: I): ImportedFile {
    const message = createBaseImportedFile();
    message.importedRows = object.importedRows?.map((e) => ImportedRow.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastImportDate(): LastImportDate {
  return { lastImportDate: undefined };
}

export const LastImportDate = {
  encode(message: LastImportDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastImportDate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastImportDate), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastImportDate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastImportDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastImportDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LastImportDate {
    return { lastImportDate: isSet(object.lastImportDate) ? fromJsonTimestamp(object.lastImportDate) : undefined };
  },

  toJSON(message: LastImportDate): unknown {
    const obj: any = {};
    message.lastImportDate !== undefined && (obj.lastImportDate = message.lastImportDate.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LastImportDate>, I>>(base?: I): LastImportDate {
    return LastImportDate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LastImportDate>, I>>(object: I): LastImportDate {
    const message = createBaseLastImportDate();
    message.lastImportDate = object.lastImportDate ?? undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
