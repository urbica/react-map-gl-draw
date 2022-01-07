// @flow

import * as React from 'react';
import { MapContext } from '@urbica/react-map-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import theme from '@mapbox/mapbox-gl-draw/src/lib/theme';

const modes = MapboxDraw.modes;

export type Props = {
  /** Draw controls position */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',

  /** Whether or not to enable keyboard interactions for drawing. */
  keybindings?: boolean,

  /** Whether or not to enable touch interactions for drawing. */
  touchEnabled?: boolean,

  /**
   * Whether or not to enable box selection of features with shift+click+drag.
   * If false, shift+click+drag zooms into an area.
   */
  boxSelect?: boolean,

  /**
   * Number of pixels around any feature or vertex (in every direction)
   * that will respond to a click.
   */
  clickBuffer?: number,

  /**
   * Number of pixels around any feature of vertex (in every direction)
   * that will respond to a touch.
   */
  touchBuffer?: number,

  /** Hide or show Point Control. */
  pointControl?: boolean,

  /** Hide or show Line String Control. */
  lineStringControl?: boolean,

  /** Hide or show Polygon Control. */
  polygonControl?: boolean,

  /** Hide or show Trash Control. */
  trashControl?: boolean,

  /** Hide or show Combine Features Control. */
  combineFeaturesControl?: boolean,

  /** Hide or show Uncombine Features Control. */
  uncombineFeaturesControl?: boolean,

  /**
   *  The default value for controls. For example, if you would like all
   *  controls to be off by default, and specify a whitelist with controls,
   *  use displayControlsDefault: false.
   */
  displayControlsDefault?: boolean,

  /** An array of map style objects. */
  styles?: Array<Object>,

  /**
   * Over ride the default modes with your own.
   * Can accepts a function. That function will receive the default modes as the
   * first argument
   */
  modes?: Object | Function,

  /** The mode that will used. */
  mode?: String,

  /** The mode options. */
  modeOptions?: Object,

  /**
   * Properties of a feature will also be available for styling
   * and prefixed with user_, e.g., ['==', 'user_custom_label', 'Example']
   */
  userProperties?: boolean,

  /** Valid geoJSON to edit with Draw. */
  data?: Object,

  /**
   * Fired when a feature is created.
   * The following interactions will trigger this event:
   * • Finish drawing a feature. Simply clicking will create a Point.
   *   A LineString or Polygon is only created when the user
   *   has finished drawing it — i.e. double-clicked the last vertex
   *   or hit Enter — and the drawn feature is valid.
   */
  onDrawCreate?: Function,

  /**
   * Fired when one or more features are deleted.
   * The following interactions will trigger this event:
   * • Click the trash button when one or more features are selected
   *   in simple_select mode.
   * • Hit the Backspace or Delete keys when one or features are selected
   *   in simple_select mode.
   * • Invoke draw.trash() when you have a feature selected in
   *   simple_select mode.
   */
  onDrawDelete?: Function,

  /**
   * Fired when features are combined. The following interactions will
   * trigger this event:
   * • Click the Combine button when more than one features are selected
   *   in simple_select mode.
   * • Invoke draw.combineFeatures() when more than one features are selected
   *   in simple_select mode.
   */
  onDrawCombine?: Function,

  /**
   * Fired when features are uncombined. The following interactions will
   * trigger this event:
   * • Click the Uncombine button when one or more multifeatures are selected
   *   in simple_select mode. Non-multifeatures may also be selected.
   * • Invoke draw.uncombineFeatures() when one or more multifeatures are
   *   selected in simple_select mode. Non-multifeatures may also be selected.
   */
  onDrawUncombine?: Function,

  /**
   * Fired when one or more features are updated. The following interactions
   * will trigger this event, which can be subcategorized by action:
   * • `action: 'move'`
   *   • Finish moving one or more selected features in `simple_select` mode.
   *      The event will only fire when the movement is finished
   *      (i.e. when the user releases the mouse button or hits Enter).
   * • `action: 'change_coordinates'`
   *   • Finish moving one or more vertices of a selected feature in
   *     `direct_select` mode. The event will only fire when the movement
   *     is finished (i.e. when the user releases the mouse button or
   *     hits Enter, or her mouse leaves the map container).
   *   • Delete one or more vertices of a selected feature in `direct_select`
   *     mode, which can be done by hitting the Backspace or Delete keys,
   *     clicking the Trash button, or invoking draw.trash().
   *   • Add a vertex to the selected feature by clicking a midpoint on that
   *     feature in direct_select mode.
   * This event will not fire when a feature is created or deleted. To track
   * those interactions, listen for draw.create and draw.delete events.
   */
  onDrawUpdate?: Function,

  /**
   * Fired when the selection is changed (i.e. one or more features are selected
   * or deselected). The following interactions will trigger this event:
   * • Click on a feature to select it.
   * • When a feature is already selected, shift-click on another feature to add
   *   it to the selection.
   * • Click on a vertex to select it.
   * • When a vertex is already selected, shift-click on another vertex to add
   *   it to the selection.
   * • Create a box-selection that includes at least one feature.
   * • Click outside the selected feature(s) to deselect.
   * • Click away from the selected vertex(s) to deselect.
   * • Finish drawing a feature (features are selected just after they are
   *   created).
   * • When a feature is already selected, invoke draw.changeMode() such that
   *   the feature becomes deselected.
   * • Use `draw.changeMode('simple_select', { featureIds: [..] })` to switch to
   *   `simple_select` mode and immediately select the specified features.
   * • Use `draw.delete`, `draw.deleteAll` or `draw.trash` to delete feature(s).
   */
  onDrawSelectionChange?: Function,

  /**
   * Fired when the mode is changed. The following interactions will trigger
   * this event:
   * • Click the point, line, or polygon buttons to begin drawing (enter a
   *   `draw_*` mode).
   * • Finish drawing a feature (enter `simple_select` mode).
   * • While in `simple_select` mode, click on an already selected feature
   *   (enter `direct_select` mode).
   * • While in `direct_select` mode, click outside all features (enter
   *   `simple_select` mode).
   * This event is fired just after the current mode stops and just before
   * the next mode starts. A render will not happen until after all event
   * handlers have been triggered, so you can force a mode redirect by calling
   * `draw.changeMode()` inside a `draw.modechange` handler.
   */
  onDrawModeChange?: Function,

  /**
   * Fired just after Draw calls `setData()` on the Mapbox GL JS map. This does
   * not imply that the set data call has finished updating the map, just that
   * the map is being updated.
   */
  onDrawRender?: Function,

  /**
   * Fired as the state of Draw changes to enable and disable different actions.
   * Following this event will enable you know if `draw.trash()`,
   * `draw.combineFeatures()` and draw.uncombineFeatures() will have an effect.
   */
  onDrawActionable?: Function,

  /**
   * Fired when features are changed. (`draw.create`, `draw.delete`,
   * `draw.combine`, `draw.uncombine`, `draw.update`).
   */
  onChange?: Function
};

class Draw extends React.PureComponent<Props> {
  static defaultProps = {
    position: 'top-right',
    keybindings: true,
    touchEnabled: true,
    boxSelect: true,
    clickBuffer: 2,
    touchBuffer: 25,
    pointControl: true,
    lineStringControl: true,
    polygonControl: true,
    trashControl: true,
    combineFeaturesControl: true,
    uncombineFeaturesControl: true,
    displayControlsDefault: true,
    styles: theme,
    modes,
    mode: 'simple_select',
    modeOptions: {},
    userProperties: false,
    data: null,
    onDrawCreate: null,
    onDrawDelete: null,
    onDrawCombine: null,
    onDrawUncombine: null,
    onDrawUpdate: null,
    onDrawSelectionChange: null,
    onDrawModeChange: null,
    onDrawRender: null,
    onDrawActionable: null,
    onChange: null
  };

  componentDidMount() {
    this._createControl();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.data) {
      // $FlowFixMe
      this._draw.set(this.props.data);
    }

    const controlsChanged = prevProps.pointControl !== this.props.pointControl ||
      prevProps.lineStringControl !== this.props.lineStringControl ||
      prevProps.polygonControl !== this.props.polygonControl ||
      prevProps.trashControl !== this.props.trashControl ||
      prevProps.combineFeaturesControl !== this.props.combineFeaturesControl ||
      prevProps.uncombineFeaturesControl !== this.props.uncombineFeaturesControl ||
      prevProps.displayControlsDefault !== this.props.displayControlsDefault

    if (prevProps.position !== this.props.position || controlsChanged) {
      this._removeControl()
      this._createControl();
    }

    if (prevProps.mode !== this.props.mode) {
      // $FlowFixMe
      this._draw.changeMode(this.props.mode, this.props.modeOptions);
    }
  }

  componentWillUnmount(): void {
    this._removeControl()
  }

  getDraw() {
    // $FlowFixMe
    return this._draw;
  }

  _createControl = () => {
    // $FlowFixMe
    const map = this._map;
    // $FlowFixMe
    this._draw = new MapboxDraw({
      keybindings: this.props.keybindings,
      touchEnabled: this.props.touchEnabled,
      boxSelect: this.props.boxSelect,
      clickBuffer: this.props.clickBuffer,
      touchBuffer: this.props.touchBuffer,
      controls: {
        point: this.props.pointControl,
        line_string: this.props.lineStringControl,
        polygon: this.props.polygonControl,
        trash: this.props.trashControl,
        combine_features: this.props.combineFeaturesControl,
        uncombine_features: this.props.uncombineFeaturesControl
      },
      displayControlsDefault: this.props.displayControlsDefault,
      styles: this.props.styles,
      modes: typeof this.props.modes === 'function'
        ? this.props.modes(this.constructor.defaultProps.modes)
        : this.props.modes,
      defaultMode: this.props.mode,
      userProperties: this.props.userProperties
    });

    map.addControl(this._draw, this.props.position);
    map.on('draw.create', this._onDrawCreate);
    map.on('draw.create', this._onChange);
    map.on('draw.delete', this._onDrawDelete);
    map.on('draw.delete', this._onChange);
    map.on('draw.combine', this._onDrawCombine);
    map.on('draw.combine', this._onChange);
    map.on('draw.uncombine', this._onDrawUncombine);
    map.on('draw.uncombine', this._onChange);
    map.on('draw.update', this._onDrawUpdate);
    map.on('draw.update', this._onChange);
    map.on('draw.selectionchange', this._onDrawSelectionchange);
    map.on('draw.modechange', this._onDrawModechange);
    map.on('draw.render', this._onDrawRender);
    map.on('draw.actionable', this._onDrawActionable);

    if (this.props.data) {
      // $FlowFixMe
      this._draw.add(this.props.data);
    }
  };

  _removeControl = () => {
    // $FlowFixMe
    const map = this._map;

    if (!map || !map.getStyle()) {
      return;
    }

    map.off('draw.create', this._onDrawCreate);
    map.off('draw.create', this._onChange);
    map.off('draw.delete', this._onDrawDelete);
    map.off('draw.delete', this._onChange);
    map.off('draw.combine', this._onDrawCombine);
    map.off('draw.combine', this._onChange);
    map.off('draw.uncombine', this._onDrawUncombine);
    map.off('draw.uncombine', this._onChange);
    map.off('draw.update', this._onDrawUpdate);
    map.off('draw.update', this._onChange);
    map.off('draw.selectionchange', this._onDrawSelectionchange);
    map.off('draw.modechange', this._onDrawModechange);
    map.off('draw.render', this._onDrawRender);
    map.off('draw.actionable', this._onDrawActionable);

    // $FlowFixMe
    map.removeControl(this._draw);
  }

  _onChange = () => {
    const { onChange } = this.props;

    if (onChange) {
      // $FlowFixMe
      const allFeatures = this._draw.getAll();
      onChange(allFeatures);
    }
  };

  _onDrawCreate = (event: Object) => {
    if (this.props.onDrawCreate) {
      this.props.onDrawCreate(event);
    }
  };

  _onDrawDelete = (event: Object) => {
    if (this.props.onDrawDelete) {
      this.props.onDrawDelete(event);
    }
  };

  _onDrawCombine = (event: Object) => {
    if (this.props.onDrawCombine) {
      this.props.onDrawCombine(event);
    }
  };

  _onDrawUncombine = (event: Object) => {
    if (this.props.onDrawUncombine) {
      this.props.onDrawUncombine(event);
    }
  };

  _onDrawUpdate = (event: Object) => {
    if (this.props.onDrawUpdate) {
      this.props.onDrawUpdate(event);
    }
  };

  _onDrawSelectionchange = (event: Object) => {
    if (this.props.onDrawSelectionChange) {
      this.props.onDrawSelectionChange(event);
    }
  };

  _onDrawModechange = (event: Object) => {
    if (this.props.onDrawModeChange) {
      this.props.onDrawModeChange(event);
    }
  };

  _onDrawRender = (event: Object) => {
    if (this.props.onDrawRender) {
      this.props.onDrawRender(event);
    }
  };

  _onDrawActionable = (event: Object) => {
    if (this.props.onDrawActionable) {
      this.props.onDrawActionable(event);
    }
  };

  render() {
    return React.createElement(MapContext.Consumer, {}, (map) => {
      if (map) {
        // $FlowFixMe
        this._map = map;
      }
      return null;
    });
  }
}

export default Draw;
