// @flow

export type EventProps = {
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
  onDrawActionable?: Function
};
