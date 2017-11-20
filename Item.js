export default class Item {

  constructor(id, name, enabled) {
    this._id = id;
    this._name = name;
    this._enabled = enabled;
  }

  get id() {return this._id}

  get name() {return this._name}
  set name(value) {this._name = value}

  get enabled() {return this._enabled}
  set enabled(value) {this._enabled = value}

}