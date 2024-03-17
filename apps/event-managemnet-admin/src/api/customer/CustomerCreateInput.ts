import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastNaE?: string | null;
};
