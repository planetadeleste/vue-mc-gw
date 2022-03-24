import { ReleaseData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Release from "../models/Release";

export default class ReleaseCollection extends Collection<Release> {
  model(): typeof Release {
    return Release;
  }

  routes(): Record<string, any> {
    return {
      fetch: "releases.index",
      list: "releases.list",
    };
  }

  async list(): Promise<Response<ReleaseData[]>> {
    return await this.createCustomRequest("list");
  }

  async listByType(sType: string): Promise<Response<ReleaseData[]>> {
    return await this.byType(sType).createCustomRequest("list");
  }

  byType<T extends ReleaseCollection>(this: T, sType: string): T {
    return this.filterBy({ type: sType });
  }
}
