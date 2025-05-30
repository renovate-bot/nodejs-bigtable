// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(authorizedView) {
  // [START bigtableadmin_v2_generated_BigtableTableAdmin_UpdateAuthorizedView_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The AuthorizedView to update. The `name` in `authorized_view` is
   *  used to identify the AuthorizedView. AuthorizedView name must in this
   *  format
   *  projects/<project>/instances/<instance>/tables/<table>/authorizedViews/<authorized_view>
   */
  // const authorizedView = {}
  /**
   *  Optional. The list of fields to update.
   *  A mask specifying which fields in the AuthorizedView resource should be
   *  updated. This mask is relative to the AuthorizedView resource, not to the
   *  request message. A field will be overwritten if it is in the mask. If
   *  empty, all fields set in the request will be overwritten. A special value
   *  `*` means to overwrite all fields (including fields not set in the
   *  request).
   */
  // const updateMask = {}
  /**
   *  Optional. If true, ignore the safety checks when updating the
   *  AuthorizedView.
   */
  // const ignoreWarnings = true

  // Imports the Admin library
  const {BigtableTableAdminClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const adminClient = new BigtableTableAdminClient();

  async function callUpdateAuthorizedView() {
    // Construct request
    const request = {
      authorizedView,
    };

    // Run request
    const [operation] = await adminClient.updateAuthorizedView(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateAuthorizedView();
  // [END bigtableadmin_v2_generated_BigtableTableAdmin_UpdateAuthorizedView_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
