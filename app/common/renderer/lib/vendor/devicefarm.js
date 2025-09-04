import { BaseVendor } from "./base.js";

export class DeviceFarmVendor extends BaseVendor {
  /**
   * @override
   */
  async configureProperties() {
    const devicefarm = this._server.devicefarm;
    const vendorName = "DeviceFarm";

    const accessKey = devicefarm.accessKey;
    const licenseId = devicefarm.licenseId;
    const projectId = devicefarm.projectId;

    this._checkInputPropertyPresence(vendorName, [
      { name: "Access Key", val: accessKey },
      { name: "License ID", val: licenseId },
      { name: "Project ID", val: projectId },
    ]);

    const host = devicefarm.host || "cloud.fireflink.com";
    const port = devicefarm.port || 443;
    const path = `/backend/fireflinkcloud/wd/hub?accessKey=${accessKey}&licenseId=${licenseId}&projectId=${projectId}`;
    const https = parseInt(port, 10) === 443;

    this._saveProperties(devicefarm, { host, path, port, https, accessKey, licenseId, projectId, vendor: 'devicefarm',});
  }
}
