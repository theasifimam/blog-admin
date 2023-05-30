import React, { useState } from "react";
import "jodit";
// import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  "|",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor, current, self, close) => {
      function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      }
      let divElement = editor.create.div("merge-field-popup");

      let labelElement = document.createElement("label");
      labelElement.setAttribute("class", "merge-field-label");
      labelElement.text = "Merge field: ";
      divElement.appendChild(labelElement);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("class", "merge-field-select");
      selectElement.appendChild(
        createOptionGroupElement(facilityMergeFields, "Facility")
      );
      selectElement.appendChild(
        createOptionGroupElement(inspectionMergeFields, "Inspection")
      );
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      console.log(divElement);
      return divElement;
    },
  },
  {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function (editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: "100%",
  minHeight: 350,
};

const initialContent = `
<p>TRY COPY CONTENT FROM A WORD AND PASTE HERE.</p><hr>
</p><p><br></p><p>Subject: May 23 2019 Compliance Inspection for&nbsp;{{FacilityName}}</p><p> 
(ie. {{InspectionCompleteDate}} {{InspectionEventType}} “Inspection”)
</p><p><br></p><p>An inspection of Carl's Jr (FSE-0004) located at 65 Rogers Road Patterson, CA 95363 was completed on May 23 2019.
</p><p><br></p><p>A copy of the inspection report is available here:&nbsp;<a href="www.open.linkoonline.com/asdfajjhafjasdfajsjfdjhafd">www.open.linkoonline.com/asdfajjhafjasdfajsjfdjhafd</a></p><p><br></p><p>
If you have any questions or concerns, please contact us.
</p><p><br></p><p>Sincerely,
</p><p>Mark Gentry
</p><p>Lead FOG Inspector
</p><p>City of Patterson Environmental Compliance Department
</p><p><a href="mailto:mgentry@ci.paterson.ca.us">mgentry@ci.paterson.ca.us</a></p><p>(209) 895-8060</p>
`;
export default function MyEditor() {
  const [data, setData] = useState(initialContent);

  return (
    // <div
    //   className="App"
    //   style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    // >
    <JoditEditor
      value={data}
      config={editorConfig}
      onChange={(value) => setData(value)}
    />
    // </div>
  );
}
