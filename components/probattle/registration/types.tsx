export interface Module {
  [x: string]: any;
  id: any;
    name: string, type: "attendee" | "regular", price: number, minMembers: number, maxMembers: number, start: string, end: string, tier: string, tierDescription: string
}
