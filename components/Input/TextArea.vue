<template lang="">
    <div>
      <p>{{label}}</p>
      <Textarea  :class="{ 'p-invalid': errors[name] }" :rows="rows" :cols="cols"  :placeholder="placeholder" :name="label" v-model="value" />
      <small :id="`${name}-help`" class="p-error">
          {{ errors[name] }}
      </small>
    </div>
  </template>
  <script>
  export default {
    name:"TextArea",
    props:{
      label:{
        default:"This is your label",
        type:String,
      },
      placeholder:{
        default:"Enter your text",
        type:String,
      },
      modelValue:{
        default:''
      },
      rows:{
        default:4,
        type:String,
      },
      cols:{
        default:3,
        type:String,
      },
      errors:{
        default:"{}",
        type:Object,
      },
  
      name:{
        default:"",
        type:String,
      },
    },
    emits:['update:modelValue'],
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
  </script>
  <style scoped>
    .p-invalid{
        border-color: red;
      }
  </style>