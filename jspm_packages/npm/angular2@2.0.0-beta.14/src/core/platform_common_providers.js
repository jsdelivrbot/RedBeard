'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var console_1 = require('angular2/src/core/console');
var reflection_1 = require('./reflection/reflection');
var reflector_reader_1 = require('./reflection/reflector_reader');
var testability_1 = require('angular2/src/core/testability/testability');
function _reflector() {
    return reflection_1.reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
exports.PLATFORM_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    new di_1.Provider(reflection_1.Reflector, { useFactory: _reflector, deps: [] }),
    new di_1.Provider(reflector_reader_1.ReflectorReader, { useExisting: reflection_1.Reflector }),
    testability_1.TestabilityRegistry,
    console_1.Console
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOlsiX3JlZmxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXNFLDBCQUEwQixDQUFDLENBQUE7QUFDakcsbUJBQXVELHNCQUFzQixDQUFDLENBQUE7QUFDOUUsd0JBQXNCLDJCQUEyQixDQUFDLENBQUE7QUFDbEQsMkJBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFDN0QsaUNBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsNEJBQWtDLDJDQUEyQyxDQUFDLENBQUE7QUFFOUU7SUFDRUEsTUFBTUEsQ0FBQ0Esc0JBQVNBLENBQUNBO0FBQ25CQSxDQUFDQTtBQUVEOztHQUVHO0FBQ1UsaUNBQXlCLEdBQW1DLGlCQUFVLENBQUM7SUFDbEYsSUFBSSxhQUFRLENBQUMsc0JBQVMsRUFBRSxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQzNELElBQUksYUFBUSxDQUFDLGtDQUFlLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0JBQVMsRUFBQyxDQUFDO0lBQ3ZELGlDQUFtQjtJQUNuQixpQkFBTztDQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgaXNCbGFuaywgaXNQcmVzZW50LCBhc3NlcnRpb25zRW5hYmxlZCwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtDb25zb2xlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jb25zb2xlJztcbmltcG9ydCB7UmVmbGVjdG9yLCByZWZsZWN0b3J9IGZyb20gJy4vcmVmbGVjdGlvbi9yZWZsZWN0aW9uJztcbmltcG9ydCB7UmVmbGVjdG9yUmVhZGVyfSBmcm9tICcuL3JlZmxlY3Rpb24vcmVmbGVjdG9yX3JlYWRlcic7XG5pbXBvcnQge1Rlc3RhYmlsaXR5UmVnaXN0cnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3Rlc3RhYmlsaXR5L3Rlc3RhYmlsaXR5JztcblxuZnVuY3Rpb24gX3JlZmxlY3RvcigpOiBSZWZsZWN0b3Ige1xuICByZXR1cm4gcmVmbGVjdG9yO1xufVxuXG4vKipcbiAqIEEgZGVmYXVsdCBzZXQgb2YgcHJvdmlkZXJzIHdoaWNoIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhbnkgQW5ndWxhciBwbGF0Zm9ybS5cbiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBuZXcgUHJvdmlkZXIoUmVmbGVjdG9yLCB7dXNlRmFjdG9yeTogX3JlZmxlY3RvciwgZGVwczogW119KSxcbiAgbmV3IFByb3ZpZGVyKFJlZmxlY3RvclJlYWRlciwge3VzZUV4aXN0aW5nOiBSZWZsZWN0b3J9KSxcbiAgVGVzdGFiaWxpdHlSZWdpc3RyeSxcbiAgQ29uc29sZVxuXSk7Il19