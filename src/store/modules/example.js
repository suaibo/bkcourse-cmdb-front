/**
 * @file app store
 * @author
 */

import http from '@/api';
import queryString from 'query-string';

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    getTableData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      return http.get(`/api/table?&${queryString.stringify(params)}`, params, config);
    },
    // 查询业务列表
    getBizData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      return http.get(`https://apps.ce.bktencent.com/stag--default--bk-scut-course/biz-list`, params, config);
    },
    // 根据业务ID，查询集群列表
    getSetData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/set-list?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 根据业务ID和集群ID，查询模块列表
    getModuleData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/module-list?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 根据传入的查询参数，查询主机列表
    getHostsData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/host-list?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 根据传入的主机ID，查询主机详情信息
    getHostDetail(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/host-detail?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 根据传入的主机ID列表、文件目录和文件后缀，查询主机上符合条件的文件
    searchFile(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/search-file?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 根据传入的主机ID和文件信息，备份符合要求的文件到指定目录
    backupFile(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      const url = `https://apps.ce.bktencent.com/stag--default--bk-scut-course/backup-file?${queryString.stringify(params)}`;
      return http.get(url, {}, config);
    },
    // 查询备份记录
    getBackupRecord(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      return http.get(`https://apps.ce.bktencent.com/stag--default--bk-scut-course/backup-record`, params, config);
    },
  },
};
