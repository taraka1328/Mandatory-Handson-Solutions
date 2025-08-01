import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

// Snapshot serializer
expect.addSnapshotSerializer({
  test: (val) => val && val.exists && typeof val.exists === "function",
  print: (val) => toJson(val),
});
