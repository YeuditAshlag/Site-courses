import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-LDCJVNPO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ADC7WMBP.js";
import {
  Subject
} from "./chunk-WSA2QMXP.js";
import {
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2)
      return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.equalsByValue(obj1[i], obj2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key]))
          return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input) {
    return Object.prototype.toString.call(input) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = value1.localeCompare(value2, locale, { numeric: true });
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static ɵfac = function ConfirmationService_Factory(t) {
    return new (t || _ConfirmationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static ɵfac = function ContextMenuService_Factory(t) {
    return new (t || _ContextMenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() === filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() !== filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime)
        return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else
        return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() < filter.getTime();
      else
        return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() <= filter.getTime();
      else
        return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() > filter.getTime();
      else
        return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() >= filter.getTime();
      else
        return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static ɵfac = function FilterService_Factory(t) {
    return new (t || _FilterService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FilterService,
    factory: _FilterService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {Message} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Insterts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static ɵfac = function MessageService_Factory(t) {
    return new (t || _MessageService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MessageService,
    factory: _MessageService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static ɵfac = function OverlayService_Factory(t) {
    return new (t || _OverlayService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _OverlayService,
    factory: _OverlayService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrimeNGConfig = class _PrimeNGConfig {
  ripple = false;
  inputStyle = "outlined";
  overlayOptions = {};
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  static ɵfac = function PrimeNGConfig_Factory(t) {
    return new (t || _PrimeNGConfig)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrimeNGConfig,
    factory: _PrimeNGConfig.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNGConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static ɵfac = function Header_Factory(t) {
    return new (t || _Header)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Header,
    selectors: [["p-header"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static ɵfac = function Footer_Factory(t) {
    return new (t || _Footer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static ɵfac = function PrimeTemplate_Factory(t) {
    return new (t || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [InputFlags.None, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      host: {}
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static ɵfac = function SharedModule_Factory(t) {
    return new (t || _SharedModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer, PrimeTemplate],
    imports: [CommonModule],
    exports: [Header, Footer, PrimeTemplate]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static ɵfac = function TreeDragDropService_Factory(t) {
    return new (t || _TreeDragDropService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || { top: -1 * windowScrollTop, left: -1 * windowScrollLeft };
    let top, left;
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      element.style.transformOrigin = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      element.style.transformOrigin = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
  }
  static absolutePosition(element, target) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style = getComputedStyle(el);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);
    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style = getComputedStyle(el);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);
    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`);
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
};

// node_modules/primeng/fesm2022/primeng-baseicon.mjs
var _c02 = ["*"];
var BaseIcon = class _BaseIcon {
  label;
  spin = false;
  styleClass;
  role;
  ariaLabel;
  ariaHidden;
  ngOnInit() {
    this.getAttributes();
  }
  getAttributes() {
    const isLabelEmpty = ObjectUtils.isEmpty(this.label);
    this.role = !isLabelEmpty ? "img" : void 0;
    this.ariaLabel = !isLabelEmpty ? this.label : void 0;
    this.ariaHidden = isLabelEmpty;
  }
  getClassNames() {
    return `p-icon ${this.styleClass ? this.styleClass + " " : ""}${this.spin ? "p-icon-spin" : ""}`;
  }
  static ɵfac = function BaseIcon_Factory(t) {
    return new (t || _BaseIcon)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: [1, "p-element", "p-icon-wrapper"],
    inputs: {
      label: "label",
      spin: "spin",
      styleClass: "styleClass"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element p-icon-wrapper"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    spin: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var SpinnerIcon = class _SpinnerIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(t) {
      return (ɵSpinnerIcon_BaseFactory || (ɵSpinnerIcon_BaseFactory = ɵɵgetInheritedFactory(_SpinnerIcon)))(t || _SpinnerIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SpinnerIcon,
    selectors: [["SpinnerIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerIcon, [{
    type: Component,
    args: [{
      selector: "SpinnerIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var Ripple = class _Ripple {
  document;
  platformId;
  renderer;
  el;
  zone;
  config;
  constructor(document2, platformId, renderer, el, zone, config) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.zone = zone;
    this.config = config;
  }
  animationListener;
  mouseDownListener;
  timeout;
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.config && this.config.ripple) {
        this.zone.runOutsideAngular(() => {
          this.create();
          this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        });
      }
    }
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    DomHandler.removeClass(ink, "p-ink-active");
    if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
      let d = Math.max(DomHandler.getOuterWidth(this.el.nativeElement), DomHandler.getOuterHeight(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = DomHandler.getOffset(this.el.nativeElement);
    let x = event.pageX - offset.left + this.document.body.scrollTop - DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    DomHandler.addClass(ink, "p-ink-active");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        DomHandler.removeClass(ink2, "p-ink-active");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      DomHandler.removeClass(ink, "p-ink-active");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      DomHandler.removeElement(ink);
    }
  }
  ngOnDestroy() {
    if (this.config && this.config.ripple) {
      this.remove();
    }
  }
  static ɵfac = function Ripple_Factory(t) {
    return new (t || _Ripple)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple", "p-element"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var RippleModule = class _RippleModule {
  static ɵfac = function RippleModule_Factory(t) {
    return new (t || _RippleModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RippleModule,
    declarations: [Ripple],
    imports: [CommonModule],
    exports: [Ripple]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Ripple],
      declarations: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-button.mjs
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassMap("p-button-loading-icon pi-spin " + ctx_r7.loadingIcon);
    ɵɵproperty("ngClass", ctx_r7.iconClass());
    ɵɵattribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 9);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵproperty("styleClass", ctx_r8.spinnerIconClass())("spin", true);
    ɵɵattribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 5, "span", 6)(2, Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template, 1, 4, "SpinnerIcon", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r5.loadingIcon);
  }
}
function Button_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Button_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Button_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, Button_ng_container_3_span_2_1_Template, 1, 0, null, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r6.iconClass());
    ɵɵattribute("aria-hidden", true)("data-pc-section", "loadingicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_span_2_Template, 2, 4, "span", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.loadingIconTemplate);
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r11.icon);
    ɵɵproperty("ngClass", ctx_r11.iconClass());
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Button_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Button_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r13.icon);
  }
}
function Button_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, Button_ng_container_4_span_2_1_Template, 1, 1, null, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r12.iconClass());
    ɵɵattribute("data-pc-section", "icon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.iconTemplate);
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 6)(2, Button_ng_container_4_span_2_Template, 2, 3, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.icon && !ctx_r2.iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.icon && ctx_r2.iconTemplate);
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵattribute("aria-hidden", ctx_r3.icon && !ctx_r3.label)("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.label);
  }
}
function Button_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.badgeClass);
    ɵɵproperty("ngClass", ctx_r4.badgeStyleClass());
    ɵɵattribute("data-pc-section", "badge");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.badge);
  }
}
var _c03 = ["*"];
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonDirective = class _ButtonDirective {
  el;
  document;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Uses to pass attributes to the loading icon's DOM element.
   * @group Props
   */
  loadingIcon;
  /**
   * Text of the button.
   * @group Props
   */
  get label() {
    return this._label;
  }
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Name of the icon.
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  _label;
  _icon;
  _loading = false;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  constructor(el, document2) {
    this.el = el;
    this.document = document2;
  }
  ngAfterViewInit() {
    DomHandler.addMultipleClasses(this.htmlElement, this.getStyleClass().join(" "));
    this.createIcon();
    this.createLabel();
    this.initialized = true;
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && ObjectUtils.isEmpty(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !ObjectUtils.isEmpty(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    return styleClass;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  createLabel() {
    const created = DomHandler.findSingle(this.htmlElement, ".p-button-label");
    if (!created && this.label) {
      let labelElement = this.document.createElement("span");
      if (this.icon && !this.label) {
        labelElement.setAttribute("aria-hidden", "true");
      }
      labelElement.className = "p-button-label";
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = DomHandler.findSingle(this.htmlElement, ".p-button-icon");
    if (!created && (this.icon || this.loading)) {
      let iconElement = this.document.createElement("span");
      iconElement.className = "p-button-icon";
      iconElement.setAttribute("aria-hidden", "true");
      let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
      if (iconPosClass) {
        DomHandler.addClass(iconElement, iconPosClass);
      }
      let iconClass = this.getIconClass();
      if (iconClass) {
        DomHandler.addMultipleClasses(iconElement, iconClass);
      }
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = DomHandler.findSingle(this.htmlElement, ".p-button-label");
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = DomHandler.findSingle(this.htmlElement, ".p-button-icon");
    let labelElement = DomHandler.findSingle(this.htmlElement, ".p-button-label");
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  ngOnDestroy() {
    this.initialized = false;
  }
  static ɵfac = function ButtonDirective_Factory(t) {
    return new (t || _ButtonDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      label: "label",
      icon: "icon",
      loading: "loading"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();
var Button = class _Button {
  el;
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * Uses to pass attributes to the label's DOM element.
   * @group Props
   */
  label;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   *  Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   */
  badgeClass;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  contentTemplate;
  loadingIconTemplate;
  iconTemplate;
  templates;
  constructor(el) {
    this.el = el;
  }
  spinnerIconClass() {
    return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  }
  iconClass() {
    return {
      "p-button-icon": true,
      "p-button-icon-left": this.iconPos === "left" && this.label,
      "p-button-icon-right": this.iconPos === "right" && this.label,
      "p-button-icon-top": this.iconPos === "top" && this.label,
      "p-button-icon-bottom": this.iconPos === "bottom" && this.label
    };
  }
  get buttonClass() {
    return {
      "p-button p-component": true,
      "p-button-icon-only": (this.icon || this.iconTemplate || this.loadingIcon || this.loadingIconTemplate) && !this.label,
      "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
      "p-disabled": this.disabled || this.loading,
      "p-button-loading": this.loading,
      "p-button-loading-label-only": this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === "left",
      "p-button-link": this.link,
      [`p-button-${this.severity}`]: this.severity,
      "p-button-raised": this.raised,
      "p-button-rounded": this.rounded,
      "p-button-text": this.text,
      "p-button-outlined": this.outlined,
      "p-button-sm": this.size === "small",
      "p-button-lg": this.size === "large",
      "p-button-plain": this.plain,
      [`${this.styleClass}`]: this.styleClass
    };
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "icon":
          this.iconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  badgeStyleClass() {
    return {
      "p-badge p-component": true,
      "p-badge-no-gutter": this.badge && String(this.badge).length === 1
    };
  }
  static ɵfac = function Button_Factory(t) {
    return new (t || _Button)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    hostVars: 2,
    hostBindings: function Button_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-disabled", ctx.disabled);
      }
    },
    inputs: {
      type: "type",
      iconPos: "iconPos",
      icon: "icon",
      badge: "badge",
      label: "label",
      disabled: "disabled",
      loading: "loading",
      loadingIcon: "loadingIcon",
      raised: "raised",
      rounded: "rounded",
      text: "text",
      plain: "plain",
      severity: "severity",
      outlined: "outlined",
      link: "link",
      size: "size",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      ariaLabel: "ariaLabel"
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    ngContentSelectors: _c03,
    decls: 7,
    vars: 12,
    consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], ["class", "p-button-loading-icon", 3, "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", "spin", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "spin"], [1, "p-button-loading-icon", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngIf"], [1, "p-button-label"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        ɵɵprojection(1);
        ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 2, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 2, "ng-container", 2)(5, Button_span_5_Template, 2, 3, "span", 3)(6, Button_span_6_Template, 2, 5, "span", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ctx.buttonClass);
        ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel)("data-pc-name", "button")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.contentTemplate && ctx.label);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.contentTemplate && ctx.badge);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, SpinnerIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      template: `
        <button
            [attr.type]="type"
            [attr.aria-label]="ariaLabel"
            [ngStyle]="style"
            [disabled]="disabled || loading"
            [ngClass]="buttonClass"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="'p-button-loading-icon pi-spin ' + loadingIcon" [ngClass]="iconClass()" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <SpinnerIcon *ngIf="!loadingIcon" [styleClass]="spinnerIconClass()" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <span *ngIf="loadingIconTemplate" class="p-button-loading-icon" [ngClass]="iconClass()" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate" [class]="icon" [ngClass]="iconClass()" [attr.data-pc-section]="'icon'"></span>
                <span *ngIf="!icon && iconTemplate" [ngClass]="iconClass()" [attr.data-pc-section]="'icon'">
                    <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate"></ng-template>
                </span>
            </ng-container>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <span [ngClass]="badgeStyleClass()" [class]="badgeClass" *ngIf="!contentTemplate && badge" [attr.data-pc-section]="'badge'">{{ badge }}</span>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element",
        "[class.p-disabled]": "disabled"
      }
    }]
  }], () => [{
    type: ElementRef
  }], {
    type: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    raised: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    plain: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    outlined: [{
      type: Input
    }],
    link: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static ɵfac = function ButtonModule_Factory(t) {
    return new (t || _ButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonModule,
    declarations: [ButtonDirective, Button],
    imports: [CommonModule, RippleModule, SharedModule, SpinnerIcon],
    exports: [ButtonDirective, Button, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, SharedModule, SpinnerIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, SpinnerIcon],
      exports: [ButtonDirective, Button, SharedModule],
      declarations: [ButtonDirective, Button]
    }]
  }], null, null);
})();
export {
  Button,
  ButtonDirective,
  ButtonModule
};
//# sourceMappingURL=primeng_button.js.map
