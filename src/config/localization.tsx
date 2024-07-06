// src/config/localization.ts
import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";

export const translations: TranslationsList = {
  todolist: {
    en: "to do list",
    ar: "قائمة المهام",
  },
  Redux: {
    en: "using redux",
    ar: "بإستخدام ريداكس",
  },
  mongez: {
    en: "using mongez",
    ar: "بإستخدام منجز",
  },
  native: {
    en: "using native",
    ar: "بدون مكتبات",
  },
  add: {
    en: "add",
    ar: "إضافة",
  },
  createdBy: {
    en: "Created by Islam M. Abozeed",
    ar: "تم بواسطة إسلام ابوزيد",
  },
  clearAll:{
    en: "Clear All",
    ar: "حذف الكل",
  },
  taskadded: {
    en: "Task Added Successfully",
    ar: "تم إضافة المهمة بنجاح",
  },
  taskStatusChanged: {
    en: "Task Status Changed",
    ar: "تم تغيير حالة المهمة",
  },
  taskDeleted: {
    en: "Task Deleted",
    ar: "تم حذف المهمة",
  },
  editingTask: {
    en: "Editing Task",
    ar: "يتم تعديل الهمة",
  },
  taskUpdated: {
    en: "Task Updated Successfully",
    ar: "تم تحديث المهمة",
  },
  tasksClearedAll: {
    en: "Clear all",
    ar: "تم حذف حميع المهام بنجاح",
  },
  warningTask: {
    en: "Task cannot be empty",
    ar: "المهمة لا يجب أن تكون فارغة",
  },
  switchLanguage:{
    en:"switch Language",
    ar:"غير اللغة"
  },
  noTasks: {
    en: "No Todo Tasks Yet",
    ar: "لا يوجد مهام حتى الآن",
  },
};

export default translations;


setLocalizationConfigurations({
  /**
   * Default locale code
   * 
   * @default en
   */
  defaultLocaleCode: "ar",
  /**
   * Fall back locale code
   * 
   * @default en
   */
  fallback: "en",
  /**
   * Set translations list
   */
  translations: translations,
});