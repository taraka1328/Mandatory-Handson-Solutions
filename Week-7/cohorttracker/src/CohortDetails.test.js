import React from "react";
import { shallow, mount } from "enzyme";
import CohortDetails from "./CohortDetails";
import { CohortData } from "./Cohort";

// Test Suite
describe("Cohort Details Component", () => {
  test("should create the component", () => {
    const wrapper = shallow(<CohortDetails />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should initialize the props", () => {
    const cohort = CohortData[0]; // pick first cohort
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    expect(wrapper.props().cohort).toEqual(cohort);
  });

  test("should display cohort code in h3", () => {
    const cohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    const h3 = wrapper.find("h3");
    expect(h3.text()).toContain(cohort.code);
  });

  test("should always render same html (snapshot)", () => {
    const cohort = CohortData[0];
    const wrapper = shallow(<CohortDetails cohort={cohort} />);
    expect(wrapper).toMatchSnapshot();
  });
});
