<template>
  <el-form ref="form" :model="form" label-width="120px" size="medium">
    <!-- 比赛类型 -->
    <div class="border-line-w">
      <el-form-item label="比赛类型">
        <el-select v-model="form.game_type" placeholder="选择比赛类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="添加比赛类型" name="1">
          <el-form ref="typeform" :model="typeform" label-width="60px" size="medium">
            <!-- 比赛类型 -->
            <div class="border-line1">
              <el-form-item label="名称">
                <el-input v-model="typeform.name"></el-input>
              </el-form-item>
              <!-- 描述 -->
              <el-form-item label="描述">
                <el-input v-model="typeform.summary"></el-input>
              </el-form-item>
            </div>

            <el-form-item>
              <el-button type="primary" @click="onSubmitType">创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 主队 -->
    <div class="border-line">
      <el-form-item label="主队">
        <el-input v-model="form.home_team"></el-input>
      </el-form-item>
    </div>
    <!-- 客队 -->
    <div class="border-line">
      <el-form-item label="客队">
        <el-input v-model="form.guest_team"></el-input>
      </el-form-item>
    </div>

    <!-- 比赛结果 -->
    <div class="border-line">
      <el-form-item label="比赛结果">
        <el-input v-model="form.game_result"></el-input>
      </el-form-item>
    </div>

    <!-- 必发交易盈亏 -->
    <div class="border-line">
      <el-form-item label="必发交易盈亏">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_bifaSuccess"
        >
          <img v-if="form.picture_bifa" :src="form.picture_bifa" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </div>

    <div class="border-line">
      <el-form-item label="竞猜交易盈亏">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_jcSuccess"
        >
          <img v-if="form.picture_jc" :src="form.picture_jc" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="竞猜人气盈亏">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_renqiSuccess"
        >
          <img v-if="form.picture_renqi" :src="form.picture_renqi" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </div>

    <div class="border-line">
      <el-form-item label="盘口(主客)">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_pankou_zhukeSuccess"
        >
          <img v-if="form.picture_pankou_zhuke" :src="form.picture_pankou_zhuke" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="盘口(升降盘)">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_pankou_shengjiangSuccess"
        >
          <img
            v-if="form.picture_pankou_shengjiang"
            :src="form.picture_pankou_shengjiang"
            class="avatar"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="赔率(升降)">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_peilvSuccess"
        >
          <img v-if="form.picture_peilv" :src="form.picture_peilv" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="赔率(概率转换)">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_gailv_zhuanSuccess"
        >
          <img v-if="form.picture_gailv_zhuan" :src="form.picture_gailv_zhuan" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="赔率(赔付控制)">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_peifu_controlSuccess"
        >
          <img v-if="form.picture_peifu_control" :src="form.picture_peifu_control" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="近10场战绩">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_10Success"
        >
          <img v-if="form.picture_10" :src="form.picture_10" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="近10场主客战绩">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="picture_10_duikeSuccess"
        >
          <img v-if="form.picture_10_duike" :src="form.picture_10_duike" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="态度">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlepicture_taiduSuccess"
        >
          <img v-if="form.picture_taidu" :src="form.picture_taidu" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </div>

    <el-form-item>
      <el-button v-if="this.form._id" type="primary" @click="onSubmit">更新</el-button>
      <el-button v-else type="primary" @click="onSubmit">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  addLottery,
  updateLottery,
  addCategoryM,
  listCategoryM,
  delCategoryM
} from "@/api/getData";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      uploadUrl: "/upload/",
      options: [],
      value: "",
      activeNames: [],
      typeform:{
        name:'',
        summary:''
      }
    };
  },
  computed: {
    ...mapState(["lottery"]),
    form() {
      return this.lottery;
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    async onSubmitType() {
      let res = await addCategoryM(this.typeform);
      this.$message({
        message: res.message,
        type: "success"
      });
      this.initData();
    },
    async initData() {
      const res = await listCategoryM();
      this.options = res.data.map(data => {
        return { value: data._id, label: data.name };
      });
    },
    async onSubmit() {
      let res;
      if (this.form._id) {
        res = await updateLottery(this.form);
      } else {
        res = await addLottery(this.form);
      }
      this.$message({
        message: res.message,
        type: "success"
      });
    },
    handlepicture_taiduSuccess(res) {
      this.form.picture_taidu = res.image_path;
    },
    handlepicture_bifaSuccess(res) {
      this.form.picture_bifa = res.image_path;
    },
    handlepicture_jcSuccess(res) {
      this.form.picture_jc = res.image_path;
    },
    handlepicture_renqiSuccess(res) {
      this.form.picture_renqi = res.image_path;
    },
    handlepicture_pankou_zhukeSuccess(res) {
      this.form.picture_pankou_zhuke = res.image_path;
    },
    handlepicture_pankou_shengjiangSuccess(res) {
      this.form.picture_pankou_shengjiang = res.image_path;
    },
    handlepicture_peilvSuccess(res) {
      this.form.picture_peilv = res.image_path;
    },
    handlepicture_gailv_zhuanSuccess(res) {
      this.form.picture_gailv_zhuan = res.image_path;
    },
    handlepicture_peifu_controlSuccess(res) {
      this.form.picture_peifu_control = res.image_path;
    },
    handlepicture_10Success(res) {
      this.form.picture_10 = res.image_path;
    },
    picture_10_duikeSuccess(res) {
      this.form.picture_10_duike = res.image_path;
    },
    handleChange(){
      
    }
  }
};
</script>

<style>
.border-line-w {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px;
  width: 95%;
}

.border-line {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
