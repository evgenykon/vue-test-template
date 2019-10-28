import Vue from 'vue';
import Sample from './../src/sample.vue';

describe("Sample.vue", function() {
    it("Component renderable", function () {
        expect(typeof Sample.render).toBe('function');
    });
    it("Correct definition of component properties", function () {
        expect(Sample.props.text).toBeDefined();
        expect(Sample.props.text.type).toBeDefined();
        expect(typeof Sample.props.text.type).toBe('function');
    });
    it("Mounting", function () {
        const vm = new Vue(Sample).$mount();
        expect(vm.$props).toBeDefined();
        expect(vm.$props.text).toBeDefined();
        expect(vm.$props.text).toBe('sample string');
    });
});