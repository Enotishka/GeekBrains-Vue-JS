import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import EditCostsComponent from "../../src/components/EditCostsComponent";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EditCostsComponent", () => {
  let getters;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      getCategoryList: jest.fn(),
    };
    actions = {
      addNewCost: jest.fn(),
      fetchCategories: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
      actions,
    });
  });

  test("Test default component props", () => {
    const wrapper = mount(EditCostsComponent, {
      propsData: {},
      store,
      localVue,
    });
    expect(wrapper.vm.id).toEqual("");
    expect(wrapper.vm.category).toEqual("");
    expect(wrapper.vm.amount).toEqual("");
    expect(wrapper.vm.date).toEqual(
      new Date().toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  });

  test("Test initial component props", () => {
    const wrapper = mount(EditCostsComponent, {
      propsData: {
        initId: "test id",
        initCategory: "test category",
        initAmount: "test amount",
        initDate: "08.10.1994",
      },
      store,
      localVue,
    });
    expect(wrapper.vm.id).toEqual("test id");
    expect(wrapper.vm.category).toEqual("test category");
    expect(wrapper.vm.amount).toEqual("test amount");
    expect(wrapper.vm.date).toEqual("08.10.1994");
  });

  test("Test fetch categories", () => {
    const wrapper = mount(EditCostsComponent, {
      propsData: {},
      store,
      localVue,
    });
    expect(actions.fetchCategories).toHaveBeenCalled();
  });

  test("Test get categories", () => {
    const categories = [
      "test category 1",
      "test category 2",
      "test category 3",
    ];
    getters.getCategoryList.mockReturnValueOnce(categories);
    const wrapper = mount(EditCostsComponent, {
      propsData: {},
      store,
      localVue,
    });
    expect(getters.getCategoryList).toHaveBeenCalled();
    const options = wrapper.findAll(".payment-form option");
    expect(options.length).toEqual(3);
    expect(options.at(0).text()).toEqual("test category 1");
    expect(options.at(1).text()).toEqual("test category 2");
    expect(options.at(2).text()).toEqual("test category 3");
  });

  test("Test save cost", () => {
    const categories = [
      "test category 1",
      "test category 2",
      "test category 3",
    ];
    getters.getCategoryList.mockReturnValueOnce(categories);
    const wrapper = mount(EditCostsComponent, {
      propsData: {},
      store,
      localVue,
    });
    wrapper.find(".category").setValue("test category 3");
    wrapper.find(".amount").setValue("test amount");
    wrapper.find(".date").setValue("08.10.1994");
    wrapper.find(".add").trigger("click");
    expect(actions.addNewCost).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        category: "test category 3",
        value: "test amount",
        date: "08.10.1994",
      })
    );
  });
});
