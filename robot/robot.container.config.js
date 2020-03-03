import { Container } from "../lib/container";

import {
  Robot,
  SingingHead,
  TalkingHead,
  HammerArms,
  SpiderLegs,
  TrackLegs
} from "./robot";

const container = new Container();
container.add("robot", Robot);
container.add("head", SingingHead).to("robot");
container.add("arms", HammerArms).to("robot");
container.add("legs", SpiderLegs).to("robot");

export { container };
