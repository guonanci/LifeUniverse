Package Control Messages
========================

Format JSDoc @params
--------------------

  User Interface
  ==============

  A menu item named "Format JSDoc @params" has been added to the "Edit" menu. There is no key binding
  associated with this menu item, by default. If you would like to define one, then do the following:

  1. Select `Key Bindings` from the `Preferences` menu
  2. Add `{ "keys": ["ctrl+shift+2"], "command": "jsdoc_param" }` to the array of **user** bindings
  3. Save the user bindings

  In this example, we chose "Shift-2" because that represents the "@" character, ubiquitous
  throughout JSDoc documentation. Of course, you can specify any key binding that you prefer.

  What It Does
  ============

  If the current selection represents a set of @param lines, one per line, it will reformat the lines
  to align the parameter types, names and descriptions. For example, if the selection represents this
  (excluding the dashed lines):

      ----------------------------------------------------------------------------
       * @param {module:app/model/model~Model} model - The model definition
       * @param {string} mode - The mode being performed (e.g. "add", "edit")
       * @param {string} name - The name of the field (e.g. "type")
       * @param {function} callback - The Node-style callback to invoke with the result
       * @param {?module:javascript~Error} callback.err - The error object
       * @param {string} callback.s - The authorization level
      ----------------------------------------------------------------------------

  it will reformat it into this:

      ----------------------------------------------------------------------------
       * @param {module:app/model/model~Model} model        - The model definition
       * @param {string}                       mode         - The mode being performed (e.g. "add", "edit")
       * @param {string}                       name         - The name of the field (e.g. "type")
       * @param {function}                     callback     - The Node-style callback to invoke with the result
       * @param {?module:javascript~Error}     callback.err - The error object
       * @param {string}                       callback.s   - The authorization level
      ----------------------------------------------------------------------------

  The *last* line in the selection might represent a @returns statement instead of a @param statement.
  In this case, this:

      ------------------------------------------------------------------------
       *         @return      {string}     -       The formatted result
      ------------------------------------------------------------------------

  would be reformatted to this:

      ------------------------------------------------------------------------
       * @returns {string} The formatted result
      ------------------------------------------------------------------------

  Details
  =======

  The general format of a @param line is:

       * @param {xxx} [yyy] - zzz
      ------------------------------
      123456789 123456789 123456789
               1         2         3
               0         0         0

  where:

      - Positions 1, 3, 10, 16, 22, 24, 28: Can represent 0 or more whitespace characters
      - "xxx" represents any characters other than a "}"
      - The "[" and "]" are themselves optional
      - "yyy" represents 1 or more non-whitespace characters
      - "zzz" represents 0 or more characters of any kind

  The general format of a @returns line is:

       * @xxx { yyy } - zzz
      ------------------------------
      123456789 123456789 123456789
               1         2         3
               0         0         0

  where:

    - "xxx" is either "return" or "returns"
    - "yyy" represents 1 or more non-whitespace characters
    - "zzz" represents 0 or more characters of any kind
    - any whitespace (positions 1, 3, 8, 10, 14, 16, 20) represents 0 or more whitespace characters
    - the "-" in position 17 may or may not be present

  This line will be reformatted to:

       * @returns {yyy} zzz
      ------------------------------
      123456789 123456789 123456789
               1         2         3
               0         0         0

  where:

      - column 1 represents the indentation to match the first @param
      - columns 3, 12 and 18 represent a single space

  Miscellaneous
  =============

  Note 1
  ------

  In the reformatted output, all lines will match the indentation of the first line.
  In other words, whatever whitespace appears before the * on the first line will
  appear on all lines.

  Note 2
  ------

  If there's nothing but whitespace after the *, we will leave the line as-is.
  This allows you to have blank (except for the leading *) lines between
  your @params, if you wish.

  Note 3
  ------

  If there isn't exactly one blank line between the @param lines and the @returns
  line, the output will be reformatted such that exactly one blank line exists.

  Note 4
  ------

  This package works just as well on @property statements as it does on @param statements.

  Note 5
  ------

  You don't need to select the first and last lines in their *entirety*. Any selection will
  be automatically expanded to the entirety of the first and last lines.

  Note 6
  ------

  "Format JSDoc @params" is an ***opinionated*** package. There are no configuration options
  at all. If you don't format your @params like we do, then this package isn't for you.
