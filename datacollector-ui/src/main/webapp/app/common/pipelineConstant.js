/**
 * Data Collector Constants.
 */
angular.module('dataCollectorApp.common')
  .constant('pipelineConstant', {
    SOURCE_STAGE_TYPE : 'SOURCE',
    PROCESSOR_STAGE_TYPE : 'PROCESSOR',
    SELECTOR_STAGE_TYPE : 'SELECTOR',
    TARGET_STAGE_TYPE : 'TARGET',
    STAGE_INSTANCE: 'STAGE_INSTANCE',
    LINK: 'LINK',
    PIPELINE: 'PIPELINE',
    DENSITY_COMFORTABLE: 'COMFORTABLE',
    DENSITY_COZY: 'COZY',
    DENSITY_COMPACT: 'COMPACT',
    LOCAL_HELP: 'LOCAL_HELP',
    HOSTED_HELP: 'HOSTED_HELP',
    CONFIGURED_SOURCE: 'CONFIGURED_SOURCE',
    SNAPSHOT_SOURCE: 'SNAPSHOT_SOURCE',
    USER_PROVIDED: 'USER_PROVIDED',
    STANDALONE: 'STANDALONE',
    CLUSTER: 'CLUSTER',
    SLAVE: 'SLAVE',
    NON_LIST_MAP_ROOT: 'root',

    BUTTON_CATEGORY: 'button',
    TAB_CATEGORY: 'tab',
    STAGE_CATEGORY: 'stage',
    CLICK_ACTION: 'click',
    SELECT_ACTION: 'select',
    ADD_ACTION: 'add',
    CONNECT_ACTION: 'connect'
  });