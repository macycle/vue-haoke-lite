<template>
  <div>
    <el-table
      :data="news"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="标识"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        align="center">
        <template slot-scope="scope">
          <el-tag type="success">{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
        align="center">
        <template slot-scope="scope">
          <edit-row :element="scope.row">
            <div slot="tag">
              <p>北京、上海、广州、南京、成都、长沙、安息</p>
            </div>
          </edit-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import editRow from './components/edit-row/'

export default {
  name: '',
  components: {
    editRow
  },
  data () {
    return {
      news: [
        {
          id: 1001,
          title: '习近平:黄花菜大产业 致富好门路 来到云冈石窟',
          desc: '',
          tag: '热门',
          date: '2020-05-12 15:05:12'
        },
        {
          id: 1002,
          title: '缓解小微企业工商户房租压力 第12个全国防灾减灾日',
          desc: '',
          tag: '社会',
          date: '2020-05-15 11:21:01'
        },
        {
          id: 1003,
          title: '以科学和团结精神抗疫 造谣言',
          desc: '',
          tag: '国内',
          date: '2020-05-16 08:41:05'
        },
        {
          id: 1001,
          title: '今天是汶川地震12周年 深切缅怀地震中遇难同胞',
          desc: '',
          tag: '社会',
          date: '2020-05-22 14:33:35'
        }
      ]
    }
  }
}
</script>
