import type { BridgeInstanceType } from '../core/src/bridge'
import type { DevToolsContext } from './src/types/context'
import type { AppRecord, ComponentTreeNode, DevToolsState, DevtoolsHook } from './src/types/vue'

/* eslint-disable vars-on-top, no-var */
declare global {
  var __VUE_DEVTOOLS_GLOBAL_HOOK__: DevtoolsHook
  var __VUE_DEVTOOLS_CLIENT_URL__: string
  var __VUE_DEVTOOLS_BRIDGE__: BridgeInstanceType
  var __VUE_DEVTOOLS_CLIENT_CONNECTED__: boolean
  var __VUE_DEVTOOLS_COMPONENT_TREE_: ComponentTreeNode[]
  // app record info
  var __VUE_DEVTOOLS_APP_RECORDS__: AppRecord[]
  var __VUE_DEVTOOLS_ACTIVE_APP_RECORD__: AppRecord
  var __VUE_DEVTOOLS_APP_RECROD_INFO__: {
    id: number
    appIds: Set<string>
  }
  // devtools global state
  var __VUE_DEVTOOLS_GLOBAL_STATE__: DevToolsState
  // devtools context
  var __VUE_DEVTOOLS_CONTEXT__: DevToolsContext
}

export { }
