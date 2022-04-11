<style>

  .inputElement{
    min-width: 100px;
    padding:5px;
    border: 1px dashed #bfbfbf;
  }

  .table-column{
    min-width: 50px;
    display: inline-table;
    flex-direction: column;
    row-gap: 10px;
  }

  .min-width{
    min-width:100px;
  }

  .rangeSlider{
    column-gap: 10px;
    display: flex;
    align-items: center;
    font-size: 8px;
    margin-top: 10px;
  }

  #tablePreview{
    box-sizing: border-box;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    margin-top: 20px;
    border: 1px dashed rgb(226 226 226);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .uk-dropdown-nav {
      font-size: .975rem;
  }



  .uk-input, .uk-select:not([multiple]):not([size]) {
      height: 35px;
      vertical-align: middle;
      display: inline-block;
  }

  .uk-grid-small > div{
    margin-bottom:0px;
  }

  .uk-form-label {
      font-size: .56rem;
      text-transform: uppercase;
      letter-spacing: 1px;
  }


  .form-container{
    background-color: #fff;
        padding: 1rem;
        border: 1px solid #00000042;
        display: grid;
        width: 100%;
        height: auto;
        border-radius: 3px;
        min-height: 100px;
        place-items: start;
        place-self: stretch;
        box-sizing: border-box;
  }

  .container .draggable{
    margin: 10px;
    cursor: move;
    padding: 5px 10px 5px 40px;
    border-radius: 3px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    display: flex;
  }

  .form-container .draggable{
    padding: 10px;
    cursor: move;
    background-color: #f5f5f5;
    box-sizing: border-box;
    display: flex;
  }

  .draggable.dragging{
    opacity: 0.5;
    border:1px dashed black;
  }

  .draggable_row.dragging{
    opacity: 0.5;
    border:1px dashed black;
  }

  .dropzone_row{
    display: flex;
    position: relative;
    width: 100%;
    padding-left: 35px;
    border: 1px solid #e2e2e2;
    background: #fdfdfd;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .dropzone{
    position: relative;
    background-color: whitesmoke;
    margin: 10px;
    border:1px dashed transparent;
    flex-grow:1;
    flex-basis: 50%;
      height: auto;
      min-height: 50px;
      justify-self: stretch;
      border-radius: 3px;
  }

  .dropzone-hovered{
    border:1px dashed black;
  }

  .textbox{
      height:35px;
      width: 100%;
      box-sizing: border-box;
  }

  .textarea{
      height:100px;
      width: 100%;
      box-sizing: border-box;
  }

  .field{
    display: grid !important;
    grid-template-rows: auto 1fr;
    place-content: stretch;
  }

  .label{
    cursor:text;
    color: gray;
    font-weight: 200 !important;
    padding:5px 0px;
  }

  .form-container .draggable > div{
    cursor: move;
  }

  .form-container .draggable:hover{
    background-color:#f3f3f3;
  }

  .developer-data{
    display: grid;
    grid-template-rows:1fr 1fr;

  }

  .output{
    width: 100%;
    height: 100%;
  }

  .output{
    width: 400px;
    height: 300px;
    border: 1px solid black;
    background-color: #f9ffa5;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: scroll;
    margin: 10px;
    box-sizing: border-box;
    white-space: pre;
  }

  .form-container .drag-icon{
    display:none !important;
  }

  .form-pallete .remove-field-icon{
    display:none !important;
  }

  .form-container .remove-field-icon{
    display:block !important;
  }

  .form-pallete .edit-field-icon{
    display:none !important;
  }

  .form-container .edit-field-icon{
    display:block !important;
  }


    .form-pallete .add-checkbox-option-button{
      display:none !important;
    }

    .form-container .add-checkbox-option-button{
      display:flex !important;
    }

</style>


<template>

    <div style="font-size: 0.7rem;background: #fbfbfb;;display:grid;grid-template-columns:1fr;width:100%;place-items:start center;overflow-y:overlay" class="custom-scroll-bar">

      <div class="stage" style="display: grid;place-items: stretch;grid-template-rows: 40px 1fr;padding: 15px 0px;overflow-y: hidden;color: rgb(51, 51, 51);width: 100%;box-sizing: border-box;">

          <div class="adk_grid_toolbar" style="grid-template-columns:auto 1fr;margin-right: 0px;margin-left: 25px;margin-bottom: -10px;border-bottom: 1px solid #e0e0e0;">

              <div style="display: grid;place-self: center start;text-align: left;">
                  <div style="display:grid;place-self:center start;padding-left:0px;padding-right:20px;color:rgba(61, 61, 61, 0.78) !important;grid-template-columns:auto auto;font-size: 1rem;line-height: 35px;">
                     <span style="font-size: 1rem; font-weight: bold;letter-spacing:0.5px">
                      Tabular Form Template Designer - Edit Template
                     </span>
                  </div>
              </div>
              <div style="display: grid;grid-gap: 10px;grid-template-columns: auto auto;place-self: center end;text-align: right;">
                <a v-on:click="convertFormTemplateToJsonMetadata()"  tabindex="6" id="editFormTemplateSaveButton" class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" data-v-37026a98="" style="background-color: rgb(2, 119, 254);border-radius: 2px;place-self: center start;place-items: center;min-width: 100px;font-size: 0.65rem;line-height: 32px;font-weight: normal !important;">Save Form Template</a>
              </div>
          </div>



          <div class="" style="padding-top: 30px;padding-left: 25px;padding-right: 0px;display: flex;column-gap:50px">

              <div style="display:flex;flex-direction: column;flex-grow:3;padding-right: 10px;">
                  <form style="width: 90%;margin-top: 15px;padding-top: 10px;padding-right: 30px;padding-left: 0px;margin-left: -15px;"
                        class="uk-grid-small" uk-grid onsubmit="return false;">
                        <div class="uk-width-2-3@s">
                            <label class="uk-form-label" for="form-stacked-text">Tabular Form Template Name</label>
                            <input tabindex="1" id="form_template_name" v-model="name" type="text" class="uk-input" placeholder="" style="width:100%;border-radius:3px"/>
                        </div>
                  </form>
                  <div style="padding-top:25px" class="uk-form-label">Table Design &nbsp; <span uk-tooltip="Add the deserved number of rows, Drag & Drop the form elements from the Form Input Pallete into this dropzone." uk-icon="icon:info;ratio:0.65" class="uk-icon"></span></div>

                  <div class="form-container">

                      <div style="display:none">
                        <select id="inputTypeSelectBox" class="uk-select" style="margin-top:10px;font-size: 10px;">
                            <option value="text">Text</option>
                            <option value="integer">Integer</option>
                            <option value="float">Decimal</option>
                            <option value="date">Date</option>
                            <option value="datetime-local">Date-Time</option>
                        </select>
                        <input id="inputTypeMinWidthRange" style="max-width:50px" type="range" step="10" value="100" min="100" max="300" />
                      </div>

                      <div id="edit_form_template_container" class="custom-scroll-bar" style="font-size: 10px;display: flex;flex-direction: row;width: 100%;column-gap: 10px;overflow-x: auto;padding-bottom: 30px;">
                        <div class="mini-btn" id="addColumnButton"  v-on:click="addColumn()" style="user-select: none;display: flex;align-items: center;">Add Column</div>
                      </div>
                      <div class="mini-btn" id="duplicateRowButton"  v-on:click="duplicateRow()" style="margin-top: 10px;user-select: none;display: flex;align-items: center;">Duplicate Row</div>
                      <div style="text-align: center;display: flex;width: 100%;padding: 10px;border-radius: 3px;margin-top: 10px;background-color: whitesmoke;justify-content: center;">Live Table Preview</div>
                      <div style="margin-top:0px;display:flex;width:100%;flex-direction: column;overflow-x: auto;" class="custom-scroll-bar" >
                        <div id="tablePreview" >
                            <div style="display: flex;column-gap: 10px;background-color: whitesmoke;text-transform: none;font-weight: bold;letter-spacing: 1px;">
                                <template v-for="item in tableColumnsArray">
                                    <div v-bind:style="'min-width:' + item.minWidth + ';padding: 5px;'">{{item.label}}</div>
                                </template>
                            </div>
                            <template v-for="row in rowsArray">
                              <div v-bind:data-row-key="row.key" style="display:flex;column-gap:10px;">
                                  <template v-for="item in tableColumnsArray">
                                      <div v-if="item.type==='text'" v-bind:style="'width:' + item.minWidth + ';padding: 5px;'">
                                          <input type="text" class="textbox form-input-element" v-bind:style="'outline: 0px;border: 0px;border-bottom: 1px solid black;width:' + item.minWidth" v-bind:id="'column_' + item.name" />
                                      </div>
                                      <div v-if="item.type==='date'" v-bind:style="'width:' + item.minWidth + ';padding: 5px;'">
                                          <input type="date" class="textbox form-input-element" v-bind:style="'outline: 0px;border: 0px;border-bottom: 1px solid black;width:' + item.minWidth" v-bind:id="'column_' + item.name" />
                                      </div>
                                      <div v-if="item.type==='datetime-local'" v-bind:style="'width:' + item.minWidth + ';padding: 5px;'">
                                          <input type="datetime-local" class="textbox form-input-element" v-bind:style="'outline: 0px;border: 0px;border-bottom: 1px solid black;width:' + item.minWidth" v-bind:id="'column_' + item.name" />
                                      </div>
                                      <div v-if="item.type==='integer'" v-bind:style="'width:' + item.minWidth + ';padding: 5px;'">
                                          <input type="number" class="textbox form-input-element" v-bind:style="'outline: 0px;border: 0px;border-bottom: 1px solid black;text-align: right;width:' + item.minWidth" v-bind:id="'column_' + item.name" />
                                      </div>
                                      <div v-if="item.type==='float'" v-bind:style="'width:' + item.minWidth + ';padding: 5px;'">
                                          <input type="number" class="textbox form-input-element" v-bind:style="'outline: 0px;border: 0px;border-bottom: 1px solid black;text-align: right;width:' + item.minWidth" v-bind:id="'column_' + item.name" />
                                      </div>
                                  </template>
                              </div>
                            </template>
                        </div>
                      </div>
                      <div style="display:none">
                        <pre>{{tableColumnsArray}}</pre>
                      </div>
                  </div>
              </div>

          </div>
        </div>


        <div id="edit-field-modal-in-edit-formtemplate" class="uk-flex-top" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style="width: 40%;font-size: 0.65rem;padding: 35px;">
                <button class="uk-modal-close-default" type="button" uk-close></button>

                <div style="display:flex">
                    <form style="width: 90%;margin-top: 15px;padding-top: 10px;padding-right: 30px;padding-left: 30px;margin-left: 0px;"
                          class="uk-grid-small" uk-grid onsubmit="return false;">
                          <div class="uk-width-2-3@s">
                              <label class="uk-form-label" for="form-stacked-text">Field Name</label>
                              <input tabindex="1" v-model="currentlyEditedFieldMetadata.name" type="text" class="uk-input" placeholder="" style="width:100%;border-radius:3px"/>
                          </div>
                          <div class="uk-width-1-3@s uk-grid-margin uk-first-column ">
                              <label class="uk-form-label" for="form-stacked-text">Field Type</label>
                              <select tabindex="7" v-model="currentlyEditedFieldMetadata.type" class="uk-select" id="form-stacked-select">
                                  <option value="text">Text</option>
                                  <option value="number">Number</option>
                                  <option value="date">Date</option>
                                  <option value="datetime-local">Date-Time</option>
                              </select>
                          </div>
                          <div style="display: flex;place-self:end;column-gap:20px;padding-right: 15px;">
                              <button tabindex="11" id="saveFieldInfoButton" v-on:click="saveFieldInfo()" class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" style="background-color: #4caf50;border-radius: 3px;place-self: center;place-items: center;min-width: 125px;font-size: 0.65rem;line-height: 30px;font-weight: normal !important;margin-left: auto;">
                                  <div>Save Field</div>
                              </button>
                              <button tabindex="11" id="discardButton" v-on:click="closeFieldInfoModal()"  class="clickable-btn uk-button uk-button-danger uk-button-small uk-grid-margin uk-first-column end-call-button" data-v-2d9397b1="" style="background-color: rgb(234 234 234);border-radius: 3px;place-self: center;place-items: center;min-width: 125px;font-size: 0.65rem;line-height: 30px;font-weight: normal !important;margin-left: auto;margin-top: 0px;color: #565656;"><div><div >Close</div></div></button>
                          </div>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>


<script>




import userMixinLib               from './../../mixins/lib/user_mixin_lib';
import utilsMixinLib              from './../../mixins/lib/utils_lib';
import uiListMixinLib             from './../../mixins/lib/ui-list.js';

    export default{
        mixins :    [
                        userMixinLib,
                        utilsMixinLib,
                        uiListMixinLib
                    ],
        props: ["id"],
        data: function () {
            return {
                appName: "taskone",
                name : null,
                formTemplateObject :{
                    id : "new",
                    firstName : "",
                    lastName : "",
                    status : "",
                    email : "",
                    password : "",
                    confirmPassword : "",
                },
                currentlyEditedField : null,
                currentlyEditedFieldMetadata : {},

                columnNumber: 0,
                tableColumns: {},
                tableColumnsArray: [],
                rowNumber: 0,
                tableRows: {},
                rowsArray: []
            };
        },

        methods: {

            duplicateRow () {

              this.rowNumber = ++this.rowNumber;
              const rowNumber = this.rowNumber;
              const rowId = "row_" + rowNumber;
              this.tableRows[rowId] = {
                "key": rowId
              };

              this.rowsArray = [];
              const tableRowsObj = this.tableRows;

              for (var key in tableRowsObj) {
                if (tableRowsObj.hasOwnProperty(key)) {
                  var val = tableRowsObj[key];
                  this.rowsArray.push(val);
                }
              }
            },
            convertTableColumnsToArray () {

              this.tableColumnsArray = [];
              const tableColumnsObj = this.tableColumns;

              for (var key in tableColumnsObj) {
                if (tableColumnsObj.hasOwnProperty(key)) {
                  var val = tableColumnsObj[key];
                  this.tableColumnsArray.push(val);
                }
              }

            },
            onColumnLabelChange (evt){
              console.log("column-label-change : ", evt.target.innerHTML);
              const column = evt.target;
              const columnRef = column.getAttribute("data-column-ref");
              (this.tableColumns[columnRef])["label"] = column.innerHTML;
              console.log(this.tableColumns);
              this.convertTableColumnsToArray();
            },
            onColumnTypeChange (evt){
              console.log("column-type-change : ", evt.target.value);
              const column = evt.target;
              const columnRef = column.getAttribute("data-column-ref");
              (this.tableColumns[columnRef])["type"] = column.value;
              console.log(this.tableColumns);
              this.convertTableColumnsToArray();
            },
            onColumnSizeChange (evt){
              console.log("column-size-change : ", evt.target.value);
              const column = evt.target;
              const columnRef = column.getAttribute("data-column-ref");
              (this.tableColumns[columnRef])["minWidth"] = column.value + "px";
              document.querySelector("#" + columnRef).style.minWidth = column.value + "px";
              document.querySelector("#" + columnRef + "_size").innerHTML = column.value + "px";
              console.log(this.tableColumns);
              this.convertTableColumnsToArray();
            },

            addColumn () {
              this.columnNumber = ++this.columnNumber;
              const columnNumber = this.columnNumber;
              const columnId = "column_" + columnNumber;
              const columnLabel = "Column " + columnNumber;

              this.tableColumns[columnId] = {
                "name": columnId,
                "label": columnLabel,
                "type": "text",
                "width": "20%",
                "minWidth": "100px"
              };

              let columnDivElement = document.createElement("div");
                  columnDivElement.classList.add("inputElement");
                  columnDivElement.classList.add("table-column");
                  columnDivElement.setAttribute("id", "column_" + columnNumber);

              let columnDivLabelElement = document.createElement("div");
                  columnDivLabelElement.classList.add("min-width");
                  columnDivLabelElement.setAttribute("contenteditable", "true");
                  columnDivLabelElement.innerHTML = columnLabel;
                  columnDivLabelElement.setAttribute("data-column-ref", "column_" + columnNumber);
                  columnDivLabelElement.addEventListener("input", (e) => this.onColumnLabelChange(e));

              let inputTypeSelectBox = document.querySelector("#inputTypeSelectBox");
              var inputTypeSelectBoxCloned = inputTypeSelectBox.cloneNode(true);
                  inputTypeSelectBoxCloned.setAttribute("data-column-ref", "column_" + columnNumber);
                  inputTypeSelectBoxCloned.addEventListener("change", (e) => this.onColumnTypeChange(e));

              let inputTypeMinWidthRange = document.querySelector("#inputTypeMinWidthRange");
              var inputTypeMinWidthRangeCloned = inputTypeMinWidthRange.cloneNode(true);
                  inputTypeMinWidthRangeCloned.setAttribute("data-column-ref", "column_" + columnNumber);
                  inputTypeMinWidthRangeCloned.addEventListener("input", (e) => this.onColumnSizeChange(e));
              const rangeValueDiv = document.createElement('div');
                  rangeValueDiv.setAttribute("display", "flex");
                  rangeValueDiv.classList.add("rangeSlider");

                      const rangeValueDisplayLabel = document.createElement('span');
                            rangeValueDisplayLabel.innerHTML = "Size";
                      const rangeValueDisplayValue = document.createElement('span');
                            rangeValueDisplayValue.setAttribute("id", columnId + "_size");
                            rangeValueDisplayValue.innerHTML = "100px";

                      rangeValueDiv.appendChild(rangeValueDisplayLabel);
                      rangeValueDiv.appendChild(inputTypeMinWidthRangeCloned);
                      rangeValueDiv.appendChild(rangeValueDisplayValue);

                  columnDivElement.appendChild(columnDivLabelElement);
                  columnDivElement.appendChild(inputTypeSelectBoxCloned);
                  columnDivElement.appendChild(rangeValueDiv);

              document.querySelector("#edit_form_template_container")
                      .insertBefore(columnDivElement, document.querySelector("#addColumnButton"));
            },
            initColumnListeners (columnId, columnLabel, columnType, minWidth) {
              this.columnNumber = ++this.columnNumber;

              this.tableColumns[columnId] = {
                "name": columnId,
                "label": columnLabel,
                "type": "text",
                "width": "20%",
                "minWidth": minWidth
              };

              let columnDivElement = document.createElement("div");
                  columnDivElement.classList.add("inputElement");
                  columnDivElement.classList.add("table-column");
                  columnDivElement.setAttribute("id", columnId);

              let columnDivLabelElement = document.createElement("div");
                  columnDivLabelElement.classList.add("min-width");
                  columnDivLabelElement.setAttribute("contenteditable", "true");
                  columnDivLabelElement.innerHTML = columnLabel;
                  columnDivLabelElement.setAttribute("data-column-ref", columnId);
                  columnDivLabelElement.addEventListener("input", (e) => this.onColumnLabelChange(e));

              let inputTypeSelectBox = document.querySelector("#inputTypeSelectBox");
              var inputTypeSelectBoxCloned = inputTypeSelectBox.cloneNode(true);
                  inputTypeSelectBoxCloned.setAttribute("data-column-ref", columnId);
                  inputTypeSelectBoxCloned.value = columnType;
                  inputTypeSelectBoxCloned.addEventListener("change", (e) => this.onColumnTypeChange(e));

              let inputTypeMinWidthRange = document.querySelector("#inputTypeMinWidthRange");
              var inputTypeMinWidthRangeCloned = inputTypeMinWidthRange.cloneNode(true);
                  inputTypeMinWidthRangeCloned.setAttribute("data-column-ref", columnId);
                  inputTypeMinWidthRangeCloned.addEventListener("input", (e) => this.onColumnSizeChange(e));
                  inputTypeMinWidthRangeCloned.value = minWidth.split("px")[0];
              const rangeValueDiv = document.createElement('div');
                  rangeValueDiv.setAttribute("display", "flex");
                  rangeValueDiv.classList.add("rangeSlider");

                      const rangeValueDisplayLabel = document.createElement('span');
                            rangeValueDisplayLabel.innerHTML = "Size";
                      const rangeValueDisplayValue = document.createElement('span');
                            rangeValueDisplayValue.setAttribute("id", columnId + "_size");
                            rangeValueDisplayValue.innerHTML = minWidth;

                      rangeValueDiv.appendChild(rangeValueDisplayLabel);
                      rangeValueDiv.appendChild(inputTypeMinWidthRangeCloned);
                      rangeValueDiv.appendChild(rangeValueDisplayValue);

                  columnDivElement.appendChild(columnDivLabelElement);
                  columnDivElement.appendChild(inputTypeSelectBoxCloned);
                  columnDivElement.appendChild(rangeValueDiv);

              document.querySelector("#edit_form_template_container")
                      .insertBefore(columnDivElement, document.querySelector("#addColumnButton"));
            },
            renderTemplate(){

                let data = `[{"rowNumber":1,"fields":[{"name":"first_name","type":"text","options":null,"colNumber":0},{"name":"last_name","type":"text","options":null,"colNumber":1}]},{"rowNumber":2,"fields":[{"name":"skill_set","type":"checkbox","options":[{"label":"Java","value":"java"},{"label":"VueJS","value":"vuejs"},{"label":"MongoDB","value":"mongodb"},{"label":"Javascript","value":"javascript"}],"colNumber":0}]},{"rowNumber":3,"fields":[{"name":"date_of_interview","type":"date","options":null,"colNumber":0}]}]`;
                let dataJSON = JSON.parse(data);

                console.log(dataJSON);


                dataJSON.forEach((row) => {
                    this.addRowForExistingFormTemplate(row, row.fields.length, row.rowNumber);
                });
            },
            addRowForExistingFormTemplate(row, numberOfColumns, rowNumber){

                // Skip row adding if there are no fields in it
                if(numberOfColumns===0)
                  return false;

                const form = document.querySelector("#edit_form_template_container");
                let formChildrenLength = form.children.length;

                let template = ``;
                let rowDivElement = document.createElement("div");
                    rowDivElement.classList.add("dropzone_row");
                    rowDivElement.classList.add("draggable_row");
                    rowDivElement.setAttribute("id", `row_${rowNumber}`);
                    rowDivElement.setAttribute("data-row", ++formChildrenLength);
                    rowDivElement.setAttribute("draggable",true);


                if(numberOfColumns===1)
                {
                    template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                    <span uk-icon="menu" style="color: #b7b7b7c4;;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                                </div>
                                <div class="dropzone" data-column="1"></div>`;
                    rowDivElement.innerHTML = template;
                }
                else if(numberOfColumns===2)
                {
                    template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                    <span uk-icon="menu" style="color: #b7b7b7c4;;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                                </div>
                                <div class="dropzone" data-column="1"></div>
                                <div class="dropzone" data-column="2"></div>`;
                    rowDivElement.innerHTML = template;
                }
                else if(numberOfColumns===3)
                {
                    template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                    <span uk-icon="menu" style="color: #b7b7b7c4;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                                </div>
                                <div class="dropzone" data-column="1"></div>
                                <div class="dropzone" data-column="2"></div>
                                <div class="dropzone" data-column="3"></div>`;
                    rowDivElement.innerHTML = template;
                }


                form.appendChild(rowDivElement);

                this.renderFields(`row_${rowNumber}`, row);
                this.init();
                this.initDragDropForFields();
                this.initDragDropForRows();
            },

            renderFields(rowId, rowData){

                let dropzones = document.getElementById(rowId).querySelectorAll(".dropzone");
                console.log("Dropzones in row id : ", rowId, " are ", dropzones );

                    if(rowData.fields.length === 1){
                        this.cloneAndAppend(rowData.fields[0], dropzones[0]);
                    }
                    else if(rowData.fields.length === 2){
                        this.cloneAndAppend(rowData.fields[0], dropzones[0]);
                        this.cloneAndAppend(rowData.fields[1], dropzones[1]);
                    }
                    else if(rowData.fields.length === 3){
                        this.cloneAndAppend(rowData.fields[0], dropzones[0]);
                        this.cloneAndAppend(rowData.fields[1], dropzones[1]);
                        this.cloneAndAppend(rowData.fields[2], dropzones[2]);
                    }
            },
            cloneAndAppend(fieldInfo, dropzone){

                let _this = this;

                let elementSelector = null;
                let fieldType = fieldInfo.type;
                let fieldName = fieldInfo.name;
                let fieldLabel = fieldInfo.label;

                if(fieldType==="text")
                {
                    elementSelector = ".form-pallete .text-input-element";
                }
                else if(fieldType==="textarea")
                {
                    elementSelector = ".form-pallete .text-area-element";
                }
                else if(fieldType==="date")
                {
                    elementSelector = ".form-pallete .date-input-element";
                }
                else if(fieldType==="datetime-local")
                {
                    elementSelector = ".form-pallete .date-input-element";
                }
                else if(fieldType==="checkbox")
                {
                    elementSelector = ".form-pallete .checkbox-input-element";
                }

                let fieldToBeCloned = document.querySelector(elementSelector);
                //console.log("Item type to be cloned is ", fieldType, fieldToBeCloned);
                var cln = fieldToBeCloned.cloneNode(true);
                    cln.classList.add("form-element");
                    cln.querySelector(".edit-field-icon").addEventListener("click", (e) => _this.editField(e), false);
                    cln.querySelector(".remove-field-icon").addEventListener("click", (e) => _this.removeField(e), false);



                let appendedItem = dropzone.appendChild(cln);
                console.log("Appended Item ", appendedItem);

                // If FieldLabel is undefined or null, then we convert the field's name attribute to a Label Formatted String with spaces.
                // Convert underscores to spaces for Labels and also capitalize the first letter
                let fieldNameLabel = fieldName.split("_").map((labelWord) => labelWord[0].toUpperCase()+ ""+ labelWord.substring(1, labelWord.length)).join(" ");

                // Find the newly added input element and alter its label and attributes to match the fieldInfo's information.
                let closestInputElement = appendedItem.querySelector(".form-input-element");
                let closestInputElementLabel = appendedItem.querySelector(".field-label");
                console.log("closestInputElement ", closestInputElement);
                  closestInputElement.setAttribute("name", fieldName);
                  closestInputElement.setAttribute("data-name", fieldNameLabel);

                  if(fieldType==="datetime-local"){
                      closestInputElement.setAttribute("type", "datetime-local");
                  }

                  if(fieldLabel===undefined || fieldLabel===null)
                      closestInputElementLabel.innerHTML = fieldNameLabel;
                  else
                      closestInputElementLabel.innerHTML = fieldLabel;


                if(fieldType ==="checkbox"){

                    closestInputElement.setAttribute("data-key", fieldName);                             //since its multiple option element.
                    closestInputElement.setAttribute("data-name", fieldLabel);
                    closestInputElement.setAttribute("data-type", "checkbox");
                    closestInputElement.setAttribute("data-checkbox-name", fieldLabel);

                    // First remove the existing default option checkboxes
                    let existingDefaultOptions = closestInputElement.querySelectorAll(".checkbox-option");
                    console.log("Existing default options are ", existingDefaultOptions);
                    existingDefaultOptions.forEach((optionElement) => optionElement.parentElement.removeChild(optionElement));

                    // Second, add the options based on this field's options metadata
                    //

                    let checkboxOptions = fieldInfo.options;

                    // When a checkbox's option label is changed, then its corresponding input[type="checkbox"]'s value must be updated with the label

                    let addCheckboxOptionLabelAsCheckboxValue = function(e){

                        console.log("Checkbox Option Label edited.");

                        let checkboxOptionContainerElement = e.target.parentElement;

                        if(checkboxOptionContainerElement.classList.contains("checkbox-option"))
                        {
                            let closestCheckboxOptionInputElement = checkboxOptionContainerElement.querySelector(".checkbox-option-element");
                            let optionName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                            closestCheckboxOptionInputElement.setAttribute("value", optionName);
                        }
                    };

                    checkboxOptions.forEach((option) => {

                          let parentElement = closestInputElement;
                          let siblingElementToInsertBefore  = closestInputElement.querySelector(".new-checkbox-option-button");
                          console.log("siblingElement is ", siblingElementToInsertBefore);

                          let newCheckboxOption = document.createElement('div');
                              newCheckboxOption.setAttribute("class", "checkbox-option");
                              newCheckboxOption.setAttribute("data-option", "Option");
                              newCheckboxOption.setAttribute("style", "display:flex");
                              newCheckboxOption.innerHTML = `<div contenteditable="true" class="checkbox-option-label">${option.label}</div>
                                                             <input type="checkbox" name="${fieldName}" value="${option.value}" class="checkbox-option-element"/>`;

                          parentElement.appendChild(newCheckboxOption);
                          parentElement.insertBefore(newCheckboxOption, siblingElementToInsertBefore);
                          console.log("New option is added to this checkbox");

                          // Add the 'onblur' listener to the newly added checkbox options.
                          const checkboxOptionLabel = newCheckboxOption.querySelector(".checkbox-option-label");    // Handle label change for checkbox options
                          checkboxOptionLabel.addEventListener('blur', addCheckboxOptionLabelAsCheckboxValue, false);
                    });


                }

            },

            convertFormTemplateToJsonMetadata(){

                    let formTemplateMetadata = [];

                    document.querySelectorAll(".draggable_row").forEach((row,index)=>{

                        let rowInfo = {};
                            rowInfo.rowNumber = ++index;
                            rowInfo.fields = [];


                        //console.log("Row " + index );
                        row.querySelectorAll(".form-input-element")
                           .forEach((field, fieldIndex) => {

                                let fieldInfo = {};
                                    fieldInfo.colNumber = fieldIndex;
                                    fieldInfo.name = field.name || field.getAttribute("data-key");
                                    fieldInfo.type = field.type || field.getAttribute("data-type");


                                    if(field.getAttribute("data-type")==="checkbox"){

                                        fieldInfo.options = [];

                                        let checkboxOptions = field.querySelectorAll(".checkbox-option-element");

                                            checkboxOptions.forEach((option) => {

                                                fieldInfo.options.push({
                                                    label : option.parentElement.querySelector(".checkbox-option-label").innerHTML,
                                                    value : option.getAttribute("value")
                                                });

                                            });

                                    }

                                    rowInfo.fields.push(fieldInfo);

                                //console.log(field, field.name, field.getAttribute("data-key"));
                           });

                           formTemplateMetadata.push(rowInfo);
                    });

                    console.log(formTemplateMetadata);

                    this.save(formTemplateMetadata);

            },

            saveFieldInfo(){

              let fieldToBeEdited = this.currentlyEditedField;

                  // Update the input element's attributes
                  let fieldName = this.currentlyEditedFieldMetadata.name.replace(/\s/g, '_').toLowerCase();
                      //fieldName = fieldName.charAt(0) + "" + fieldName.substring(1, fieldName.length);
                  fieldToBeEdited.setAttribute("data-name", this.currentlyEditedFieldMetadata.name);
                  fieldToBeEdited.setAttribute("name", fieldName);
                  fieldToBeEdited.setAttribute("type", this.currentlyEditedFieldMetadata.type);

                  // Update the field label
                  fieldToBeEdited.closest(".field").querySelector(".field-label").innerHTML = this.currentlyEditedFieldMetadata.name;

                  this.closeFieldInfoModal();
            },
            closeFieldInfoModal(){

              UIkit.modal(document.querySelector("#edit-field-modal-in-edit-formtemplate")).hide();
            },
            editField(e){
              let fieldToBeEdited = e.target.closest(".field").querySelector(".form-input-element");
              console.log("Field to be edited is ", fieldToBeEdited);

              this.currentlyEditedField = fieldToBeEdited;
              this.currentlyEditedFieldMetadata.name = fieldToBeEdited.getAttribute("data-name");
              this.currentlyEditedFieldMetadata.type = fieldToBeEdited.getAttribute("type");

              UIkit.modal(document.querySelector("#edit-field-modal-in-edit-formtemplate")).show();
            },
            removeField(e){
              let fieldToBeRemoved = e.target.closest(".field");
              fieldToBeRemoved.parentElement.innerHTML = "";
            },

            init(){

                const labels = document.querySelectorAll("#edit_form_template_container .label");   // Handle label change for input-elements
                const checkboxOptionLabels = document.querySelectorAll("#edit_form_template_container .checkbox-option-label");  // Handle label change for checkbox options
                const checkboxAddOptionButton = document.querySelectorAll("#edit_form_template_container .add-checkbox-option-button");   // Add click event for adding new option in checkbox

                let addLabelAsInputName = function(e){

                    console.log("Label edited for .", e.target);

                    let grandparentElement = e.target.parentElement.parentElement;

                    if(grandparentElement.classList.contains("form-element"))
                    {

                        if(grandparentElement.classList.contains("text-input-element"))
                        {
                            let closestInputElement = grandparentElement.querySelector(".form-input-element");
                            let fieldName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                            closestInputElement.setAttribute("name", fieldName);
                            closestInputElement.setAttribute("data-name", e.target.innerHTML);
                        }
                        else if(grandparentElement.classList.contains("text-area-element"))
                        {
                            let closestInputElement = grandparentElement.querySelector(".form-input-element");
                            let fieldName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                            closestInputElement.setAttribute("name", fieldName);
                            closestInputElement.setAttribute("data-name", e.target.innerHTML);
                        }
                        else if(grandparentElement.classList.contains("date-input-element"))
                        {
                            let closestInputElement = grandparentElement.querySelector(".form-input-element");
                            let fieldName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                            closestInputElement.setAttribute("name", fieldName);
                            closestInputElement.setAttribute("data-name", e.target.innerHTML);
                        }
                        else if(grandparentElement.classList.contains("checkbox-input-element"))
                        {
                            let closestInputElements = grandparentElement.querySelectorAll(".checkbox-option-element");
                            let fieldName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                            closestInputElements.forEach(closestInputElement => {
                                closestInputElement.setAttribute("name", fieldName);
                                closestInputElement.setAttribute("data-name", e.target.innerHTML);
                            });

                            let checkBoxInputElement = grandparentElement.querySelector(".form-input-element");
                            checkBoxInputElement.setAttribute("data-key", fieldName);                             //since its multiple option element.
                            checkBoxInputElement.setAttribute("data-name", e.target.innerHTML);
                            checkBoxInputElement.setAttribute("data-type", "checkbox");
                            checkBoxInputElement.setAttribute("data-checkbox-name", e.target.innerHTML);
                        }

                    }
                };

                labels.forEach(label => {

                    if(!label.getAttribute("is-blur-listener-attached"))
                    {
                        label.removeEventListener('blur', addLabelAsInputName, false);  // Remove existing listeners to prevent duplicate listeners (Not mandatory, but still..)
                        label.addEventListener('blur', addLabelAsInputName, false);
                        label.setAttribute("is-blur-listener-attached", true);
                        console.log("blur event added to label");
                    }
                });


                // When a checkbox's option label is changed, then its corresponding input[type="checkbox"]'s value must be updated with the label

                let addCheckboxOptionLabelAsCheckboxValue = function(e){

                    console.log("Checkbox Option Label edited.");

                    let checkboxOptionContainerElement = e.target.parentElement;

                    if(checkboxOptionContainerElement.classList.contains("checkbox-option"))
                    {
                        let closestCheckboxOptionInputElement = checkboxOptionContainerElement.querySelector(".checkbox-option-element");
                        let optionName = e.target.innerHTML.replace(/\s/g, '_').toLowerCase();
                        closestCheckboxOptionInputElement.setAttribute("value", optionName);
                    }
                };

                checkboxOptionLabels.forEach(label => {
                    label.removeEventListener('blur', addCheckboxOptionLabelAsCheckboxValue, false);  // Remove existing listeners to prevent duplicate listeners (Not mandatory, but still..)
                    label.addEventListener('blur', addCheckboxOptionLabelAsCheckboxValue, false);
                });


                let addNewCheckboxOption = function(e){

                    let parentElement = e.target.closest(".form-input-element");
                    console.log("ElementParent is ", parentElement);
                    let siblingElementToInsertBefore  = e.target.closest(".new-checkbox-option-button");
                    console.log("siblingElement is ", siblingElementToInsertBefore);

                    let newCheckboxOption = document.createElement('div');
                        newCheckboxOption.setAttribute("class", "checkbox-option");
                        newCheckboxOption.setAttribute("data-option", "Option");
                        newCheckboxOption.setAttribute("style", "display:flex");
                        newCheckboxOption.innerHTML = `<div contenteditable="true" class="checkbox-option-label">Option</div>
                                                       <input type="checkbox" name="checkbox" value="checkbox2" class="checkbox-option-element"/>`;

                    parentElement.appendChild(newCheckboxOption);
                    parentElement.insertBefore(newCheckboxOption, siblingElementToInsertBefore);
                    console.log("New option is added to this checkbox");

                    // Add the 'onblur' listener to the newly added checkbox options.
                    const checkboxOptionLabel = newCheckboxOption.querySelector(".checkbox-option-label");    // Handle label change for checkbox options
                    checkboxOptionLabel.addEventListener('blur', addCheckboxOptionLabelAsCheckboxValue, false);
                };

                checkboxAddOptionButton.forEach(addNewCheckboxOptionButton => {

                    if(addNewCheckboxOptionButton.getAttribute("action-added")===null)
                    {
                        addNewCheckboxOptionButton.removeEventListener('click', addNewCheckboxOption, false);
                        addNewCheckboxOptionButton.addEventListener('click', addNewCheckboxOption, false);
                        addNewCheckboxOptionButton.setAttribute("action-added", true);
                    }
                });

            },
            initDragDropForFields(){

                  let _this = this;

                  /*Drag Drop functionalities */

                  const dropzones = [...document.querySelectorAll(".dropzone")];
                  const draggables = document.querySelectorAll(".draggable");



                  let onFormElementDragStart = function(e){
                      console.log("field element is being dragged = This is ", this);
                      this.classList.add("dragging");
                      e.stopPropagation();
                      //e.preventDefault();
                  };

                  let onFormElementDragStop = function(e){
                      this.classList.remove("dragging");
                  };

                  let onDragOver = function(e){
                      e.preventDefault();

                      const afterElement = getDragAfterElement(this, e.clientY);
                      const draggedElement = document.querySelector(".form-element.dragging");
                      //console.log("dropzone content :", this);

                      // If a dropzone already contains a field, then don't let it have another field inside the same dropzone. Rule is 1 Field = 1 Dropzone
                      if(this.children.length>0)
                        return false;

                          if(draggedElement!==null)
                          {
                              this.appendChild(draggedElement);

                              if(afterElement == undefined){
                                  this.appendChild(draggedElement);
                              }
                              else{
                                  this.insertBefore(draggedElement,afterElement);
                              }
                          }
                  };

                  let onDragEnter = function(e){
                      e.preventDefault();
                      this.classList.add("dropzone-hovered");
                  };

                  let onDragLeave = function(e){
                      e.preventDefault();
                      this.classList.remove("dropzone-hovered");
                  };

                  let onDragDrop = function(e){


                      e.preventDefault();
                      this.classList.remove("dropzone-hovered");

                      let draggedElement = document.querySelector(".dragging");

                      if(draggedElement!==null && !draggedElement.classList.contains("form-element"))
                      {
                        var cln = draggedElement.cloneNode(true);
                            cln.classList.add("form-element");
                            cln.classList.remove("dragging");
                            cln.addEventListener('dragstart', onFormElementDragStart);
                            cln.addEventListener('dragend', onFormElementDragStop);

                            cln.querySelector(".edit-field-icon").addEventListener("click", (e) => _this.editField(e), false);
                            cln.querySelector(".remove-field-icon").addEventListener("click", (e) => _this.removeField(e), false);

                        this.appendChild(cln);
                        console.log("cln appended.",cln);
                        _this.init();
                      }
                  };

                  let getDragAfterElement = function(container, y){

                      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

                      return draggableElements.reduce((closest, child)=>{

                          const box = child.getBoundingClientRect();
                          const offset = y - box.top - box.height/2;
                          if(offset < 0 && offset > closest.offset){
                            return {
                              offset : offset,
                              element: child
                            }
                          }
                          else {
                            return closest;
                          }

                      }, {offset:Number.NEGATIVE_INFINITY}).element;
                  };


                  draggables.forEach(draggable => {

                      if(!draggable.getAttribute("data-dnd-initialized"))
                      {
                          draggable.addEventListener('dragstart', onFormElementDragStart);
                          draggable.addEventListener('dragend', onFormElementDragStop);
                          draggable.setAttribute("data-dnd-initialized", true);
                          console.log("Added dragstart/dragend listeners to draggables.");
                      }
                  });


                  dropzones.forEach(dropZone => {

                      if(!dropZone.getAttribute("data-dnd-initialized"))
                      {

                          dropZone.addEventListener("dragover", onDragOver);
                          dropZone.addEventListener("dragenter", onDragEnter);
                          dropZone.addEventListener("dragleave", onDragLeave);
                          dropZone.addEventListener("drop", onDragDrop);

                          dropZone.setAttribute("data-dnd-initialized", true);
                          console.log("Added dropZone listeners to dropZones.");
                      }
                  });

            },
            initDragDropForRows(){

                  let _this = this;

                  /*Drag Drop functionalities */

                  const dropzones = document.querySelectorAll("#edit_form_template_container");
                  const draggables = document.querySelectorAll(".draggable_row");



                  let getDragAfterElement = function(container, y){

                      const draggableElements = [...container.querySelectorAll('.draggable_row:not(.dragging_row)')];

                      return draggableElements.reduce((closest, child)=>{

                          const box = child.getBoundingClientRect();
                          const offset = y - box.top - box.height/2;
                          if(offset < 0 && offset > closest.offset){
                            return {
                              offset : offset,
                              element: child
                            }
                          }
                          else {
                            return closest;
                          }

                      }, {offset:Number.NEGATIVE_INFINITY}).element;
                  };


                  draggables.forEach(draggable => {

                      if(!draggable.getAttribute("data-dnd-initialized"))
                      {
                          draggable.addEventListener('dragstart', (e)=>{
                            e.stopPropagation();
                            draggable.classList.add("dragging_row");
                          });

                          draggable.addEventListener('dragend', ()=>{
                            draggable.classList.remove("dragging_row");
                          });
                          draggable.setAttribute("data-dnd-initialized", true);
                          console.log("Added dragstart/dragend listeners to draggables.");
                      }
                  });


                  dropzones.forEach(container => {

                      if(!container.getAttribute("data-dnd-initialized"))
                      {

                          container.addEventListener('dragover', (e)=>{
                              e.preventDefault();

                              const afterElement = getDragAfterElement(container, e.clientY);
                              const draggable = document.querySelector(".dragging_row");
                              //console.log("draggable is ", draggable);

                              if(draggable!==undefined && draggable!==null)
                              {
                                  container.appendChild(draggable);

                                  if(afterElement == undefined){
                                      container.appendChild(draggable);
                                  }
                                  else{
                                      container.insertBefore(draggable,afterElement);
                                  }
                              }

                          });


                          container.setAttribute("data-dnd-initialized", true);
                      }
                  });

            },

            saveForm(){

                const formContainer = document.querySelector("#edit_form_template_container");
                const formInputs = [...document.querySelectorAll("#edit_form_template_container .form-input-element")];

                console.log(formInputs);
                let formData = [];

                formInputs.forEach((input)=>{

                  let inputType = input.getAttribute("type");
                  let inputName = input.getAttribute("name");
                  let inputValue = input.value;

                  if(inputType === "textbox")
                  {
                    inputValue = input.innerHTML;
                  }
                  else if(inputType === "checkbox")
                  {
                    inputValue = input.value;
                  }

                  formData.push({
                    "type" : inputType,
                    "name" : inputName,
                    "val"  : inputValue
                  });
                });

                console.log(formData);
                console.log(JSON.stringify(formData, "\n", "\t"));
                document.getElementById("formCode").innerText = formContainer.innerHTML;
                document.getElementById("formData").innerHTML = JSON.stringify(formData, "\n", "\t");
            },
            goBack(){
              this.$router.push({
                  name: 'tenantUser-list',
                  params: {
                  }
              });
            },
            doValidation(){


                if(this.name!==null && this.name.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid form template name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      document.getElementById("form_template_name").focus();
                      return false;
                }

                return true;


                console.log("this.formTemplateObject = ", this.formTemplateObject);
                if(this.formTemplateObject.firstName.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid first name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      return false;
                }
                else if(this.formTemplateObject.lastName.trim()==="")
                {
                      UIkit.notification(`<div class="taskone-notification">
                                              <span uk-icon="icon: warning;ratio:1"></span>
                                              <div> Please enter a valid last name. </div>
                                          </div>`, {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 500000
                                      });

                      return false;
                }
                else if(this.formTemplateObject.email.trim()==="")
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid email.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.formTemplateObject.password.trim()==="")
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please enter a valid password.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.formTemplateObject.password!==this.formTemplateObject.confirmPassword)
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Passwords do not match.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }
                else if(this.formTemplateObject.status.trim()==="")
                {
                      UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span> Please select a valid account status.", {
                                          status: 'danger',
                                          pos: 'bottom-left',
                                          timeout: 5000
                                      });

                      return false;
                }

                return true;
            },
            save(formTemplateMetadata){

                if(!this.doValidation())
                    return false; // stop here if form is invalid.


                if(this.name === null)
                {
                    alert("Provide a valid form template name");
                    return false;
                }

                let btnText = document.getElementById("editFormTemplateSaveButton").innerHTML;
                document.getElementById("editFormTemplateSaveButton").innerHTML = "Saving..";
                this.disableHTMLElement(document.getElementById("editFormTemplateSaveButton"));

                let post_url = "./task-tabular-form-templates/save";
                console.log("Saving new form-template to : " + post_url);

                let form = {
                    id :   this.formTemplateObject.id,
                    name : this.name,
                    // rows : formTemplateMetadata,
                    columns: this.tableColumnsArray
                };

                // VueJS ajax call-1
                axios.post(post_url, form)
                          .then((dataResponse) => {

                            console.log("FormTemplate save result : ");
                            console.log(dataResponse);

                            if(dataResponse.data["actionResult"]===1)
                            {
                                this.newTenantUserInfo = dataResponse.data["bean"];

                                UIkit.notification(`<div class="taskone-notification">
                                                        <span uk-icon="icon: check;ratio:1"></span>
                                                        <div> Form Template updated successfully. </div>
                                                    </div>`, {
                                                    status: 'success',
                                                    pos: 'bottom-left',
                                                    timeout: 5000
                                                });

                                document.getElementById("editFormTemplateSaveButton").innerHTML = btnText;
                                this.enableHTMLElement(document.getElementById("editFormTemplateSaveButton"));
                                this.$emit("refreshList",{});
                            }
                            else if(dataResponse.data["actionResult"]===0 && dataResponse.data["message"]!==null)
                            {
                                let errorMsg = (dataResponse["data"])["message"];
                                UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                                    status: 'danger',
                                                    pos: 'bottom-left',
                                                    timeout: 5000
                                                });


                                document.getElementById("editFormTemplateSaveButton").innerHTML = btnText;
                                this.enableHTMLElement(document.getElementById("editFormTemplateSaveButton"));
                                return false;
                            }
                            else if(dataResponse.data["actionResult"]===0 && dataResponse.data["exception"]!==null)
                            {
                                let errorMsg = (dataResponse["data"])["exception"];
                                UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + errorMsg, {
                                                    status: 'danger',
                                                    pos: 'bottom-left',
                                                    timeout: 5000
                                                });


                                document.getElementById("editFormTemplateSaveButton").innerHTML = btnText;
                                this.enableHTMLElement(document.getElementById("editFormTemplateSaveButton"));
                                return false;
                            }


                    })
                    .catch(function(errorResponse) {

                        //https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
                        console.log("ERROR MS - ", errorResponse.response);
                        let exceptionMsg = errorResponse.response.data["exception"];

                        UIkit.notification("<span uk-icon='icon: warning ;ratio: 0.75'></span> " + exceptionMsg + ".", {
                                            status: 'danger',
                                            pos: 'bottom-left',
                                            timeout: 5000
                                        });


                        document.getElementById("editFormTemplateSaveButton").innerHTML = btnText;
                        this.enableHTMLElement(document.getElementById("editFormTemplateSaveButton"));
                        return false;
                    });
            },


            editLabel(e){
              this.setAttribute("editable",true);
            },
            addRow(numberOfColumns){
              const form = document.querySelector("#edit_form_template_container");
              let formChildrenLength = form.children.length;

              let template = ``;
              let rowDivElement = document.createElement("div");
                  rowDivElement.classList.add("dropzone_row");
                  rowDivElement.classList.add("draggable_row");
                  rowDivElement.setAttribute("data-row", ++formChildrenLength);
                  rowDivElement.setAttribute("draggable",true);


              if(numberOfColumns===1)
              {
                  template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                  <span uk-icon="menu" style="color: #b7b7b7c4;;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                              </div>
                              <div class="dropzone" data-column="1"></div>`;
                  rowDivElement.innerHTML = template;
              }
              else if(numberOfColumns===2)
              {
                  template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                  <span uk-icon="menu" style="color: #b7b7b7c4;;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                              </div>
                              <div class="dropzone" data-column="1"></div>
                              <div class="dropzone" data-column="2"></div>`;
                  rowDivElement.innerHTML = template;
              }
              else if(numberOfColumns===3)
              {
                  template = `<div style="position:absolute;left: 10px;bottom:30%;display: flex;flex-direction: column;gap: 3px;" class="drag-row-icon">
                                  <span uk-icon="menu" style="color: #b7b7b7c4;cursor:move" uk-tooltip="Click & Drag to swap the rows"></span>
                              </div>
                              <div class="dropzone" data-column="1"></div>
                              <div class="dropzone" data-column="2"></div>
                              <div class="dropzone" data-column="3"></div>`;
                  rowDivElement.innerHTML = template;
              }

              form.appendChild(rowDivElement);
              this.init();
              this.initDragDropForFields();
              this.initDragDropForRows();
            },

            getRecord(){

                let get_url = "./task-tabular-form-templates/get/" + this.formTemplateObject.id;

                axios.get(get_url)
                        .then((dataResponse) => {
                            if(dataResponse.data["actionResult"]==1)
                            {
                                let formTemplateObject = dataResponse.data["bean"];
                                this.formTemplateObject = formTemplateObject;

                                console.log("Form Template fetched is ", this.formTemplateObject);
                                this.columnNumber = 0;
                                this.tableColumns = {};
                                this.tableColumnsArray = [];
                                this.rowNumber = 0;
                                this.tableRows = {};
                                this.rowsArray = [];

                                this.tableColumnsArray = this.formTemplateObject.columns;
                                this.name = this.formTemplateObject.name;

                                // Clear the DOM Elements.
                                Array.from(document.querySelector("#edit_form_template_container").children)
                                     .forEach(tableColumn => {
                                        if (tableColumn.classList.contains("table-column")) {
                                          tableColumn.parentElement.removeChild(tableColumn);
                                        }
                                     });

                                this.tableColumnsArray.forEach((column) => {
                                    this.initColumnListeners(column.name, column.label, column.type, column.minWidth);
                                });

                                this.duplicateRow();
                                this.duplicateRow();
                                this.duplicateRow();

                                return false;

                                // Reset the form's innerHTML before adding the currently selected record's fields.
                                const form = document.querySelector("#edit_form_template_container");
                                form.innerHTML = "";

                                this.name = this.formTemplateObject.name;
                                let rows = this.formTemplateObject.rows;
                                rows.forEach((row) => {
                                    this.addRowForExistingFormTemplate(row, row.fields.length, row.rowNumber);
                                });
                            }
                        })
                        .catch((error) => {

                            UIkit.notification("<span uk-icon='icon: warning;ratio: 0.75'></span>" + error, {
                                                status: 'danger',
                                                pos: 'bottom-left',
                                                timeout: 5000
                                            });
                            return false;
                        });

            },





        },
        mounted: function () {

            this.initListLib();
            this.init();
            this.initDragDropForFields();

        },
        created: function () {
            console.log("Edit Form Template form");
        },
        watch: {

          // Since we are passing an asynced data as 'availableItems', it is necessary to watch this prop when it receives new data.
          id:function(newId, oldId){
              console.log("id changed from " + oldId + " to " + newId);
              this.formTemplateObject.id = newId;
              this.getRecord();
          }
        }
    }

</script>
