import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastNaE?: string | null;
};
