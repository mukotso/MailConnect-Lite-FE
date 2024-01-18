<template lang="">
  <div class="simple__input_wrap">
    <p class="font-bold text-md mb-2">{{label}}</p>
    <InputText  class="input mb-4" :class="{ 'p-invalid': errors[name] }" :type="type" variant="outlined" :placeholder="placeholder" :name="label" v-model="value" />
    <i :class="iconClasses" class="blue"> </i>
    <p class="text"> {{ textAsIcon }} </p>
    <small :id="`${name}-help`" class="p-error">
        {{ errors[name] }}
    </small>
  </div>
</template>
<script>
export default {
  name: "TextInput",
  props: {
    label: {
      default: "This is your label",
      type: String,
    },
    placeholder: {
      default: "Enter your text",
      type: String,
    },
    modelValue: {
      default: ''
    },
    type: {
      default: "text",
      type: String,
    },
    errors: {
      default: {},
      type: Object,
    },

    name: {
      default: "",
      type: String,
    },

    textAsIcon: {
      default: "",
      type: String,
    },

    icon: {
      default: "",
      type: String,
    },
    readonly: {
      default: false,
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    iconClasses() {
      return {
        [this.icon]: !!this.icon,
      };
    }
  }
}
</script>
<style>
.simple__input_wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
}

.simple__input_wrap i,
.simple__input_wrap .text {
  position: absolute;
  right: 15px;
  top: 30px;
  padding: 9px 8px;
  transition: 0.3s;
}

.simple__input_wrap p {
  font-size: 0.85rem;
  font-weight: 300;
  padding-bottom: 0.4rem;
  position: relative;
}

.simple__input_wrap .p-inputtext {
  font-size: 0.9rem;
  padding: 0.5rem;
  background: transparent;
  width: 100%;
  border: 1px solid gray;
}

.p-invalid {
  border-color: red;
}

.p-multiselect .p-multiselect-label {
  font-size: 0.9rem;
  padding: 0.5rem;
  background: transparent;
  width: 100%;
}

.blue {
  color: #0a94ff;
  font-size: 20px;
}

.vue-tel-input {
  border-radius: 10px;
}

.vti__dropdown {
  padding: 0px;
}</style>