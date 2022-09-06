<template>
	<div class="container">
		<Breadcrumb :items="['题库模块', '选择题录入']" />
		<div class="class-main">
			<div class="top">
				<div class="title">
					<p>选择题</p>
				</div>
				<div class="selection">
					<a-form :model="form" @submit="handleSubmit">
						<a-list :gridProps="{ gutter: 0, span: 8 }" :bordered="false">
							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-form-item class="section-tit" field="technology" label="技术栈:">
											<a-select :style="{width:'120px'}" v-model="form.technology"
												placeholder="下拉菜单">
												<a-option value="option1">选项1</a-option>
												<a-option value="option2">选项2</a-option>
												<a-option value="option3">选项3</a-option>
											</a-select>
										</a-form-item>
									</a-list-item>
								</a-list>
							</a-list-item>

							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-form-item class="section-tit" field="difficulty" label="题型难度:">
											<a-select :style="{width:'120px'}" v-model="form.difficulty"
												placeholder="下拉菜单">
												<a-option value="option1">选项1</a-option>
												<a-option value="option2">选项2</a-option>
												<a-option value="option3">选项3</a-option>
											</a-select>
										</a-form-item>
									</a-list-item>
								</a-list>
							</a-list-item>

							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-form-item class="section-tit" field="score" label="答题分数:">
											<a-select :style="{width:'120px'}" v-model="form.score" placeholder="1">
												<a-option value="option1">1</a-option>
												<a-option value="option2">2</a-option>
												<a-option value="option3">3</a-option>
											</a-select>
										</a-form-item>

									</a-list-item>
								</a-list>
							</a-list-item>
						</a-list>
					</a-form>


					<a-form :model="form" @submit="handleSubmit">
						<a-list :gridProps="{ gutter: 0, span: 8 }" :bordered="false">
							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-form-item class="section-tit" field="subject" label="科目:">
											<a-select :style="{width:'120px'}" v-model="form.subject"
												placeholder="下拉菜单">
												<a-option value="option1">选项1</a-option>
												<a-option value="option2">选项2</a-option>
												<a-option value="option3">选项3</a-option>
											</a-select>
										</a-form-item>
									</a-list-item>
								</a-list>
							</a-list-item>

							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-form-item class="section-tit" field="category" label="题型类别:">
											<a-select :style="{width:'120px'}" v-model="form.category"
												placeholder="下拉菜单">
												<a-option value="option1">选项1</a-option>
												<a-option value="option2">选项2</a-option>
												<a-option value="option3">选项3</a-option>
											</a-select>
										</a-form-item>
									</a-list-item>
								</a-list>
							</a-list-item>
						</a-list>
					</a-form>

				</div>
			</div>

			<div class="bottom">
				<div class="question">
					<div class="question-title">
						<p>题目：</p>
					</div>
					<div>
						<a-textarea placeholder="请输入题目" allow-clear
							style="width:692px;height:115px;margin-top: 30px;margin-left:20px" />
					</div>
				</div>
				<div class="selection-option">
					<div class="selection-option-tit">
						<p>选择题项：</p>
					</div>
					<div class="selection-option-answer">
						<a-list :gridProps="{ gutter: 0, span: 10 }" :bordered="false">
							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-space>
											<a-input :style="{width:'320px'}" placeholder="Please enter something"
												allow-clear />
										</a-space>
									</a-list-item>
								</a-list>
							</a-list-item>

							<a-list-item>
								<a-list style="margin-top:7px" :bordered="false">
									<a-list-item>
										<input type="radio" name="answer">正确选项
									</a-list-item>
								</a-list>
							</a-list-item>
						</a-list>

						<a-list :gridProps="{ gutter: 0, span: 10 }" :bordered="false" style="margin-left:134px">
							<a-list-item>
								<a-list :bordered="false">
									<a-list-item>
										<a-space>
											<a-input :style="{width:'320px'}" placeholder="Please enter something"
												allow-clear />
										</a-space>
									</a-list-item>
								</a-list>
							</a-list-item>

							<a-list-item>
								<a-list style="margin-top:7px" :bordered="false">
									<a-list-item>
										<input type="radio" name="answer">正确选项
										<a-space class="botton">
											<a-button type="outline" style="color:black;border-color: #BBBBBB">增加一行
											</a-button>
											<a-button type="outline" style="color:black;border-color: #BBBBBB">删除此行
											</a-button>
										</a-space>
									</a-list-item>
								</a-list>
							</a-list-item>

						</a-list>

						<a-space class="submit">
							<a-button type="outline" style="color:black;border-color: #BBBBBB">提交</a-button>
						</a-space>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>

<script lang="ts">
	import {
		reactive
	} from 'vue';
	export default {
		name: 'PickingRecord',
		setup() {
			const form = reactive({
				technology: '',
				difficulty: '',
				score: '',
				subject: '',
				category: ''
			});
			const handleSubmit = (data: any) => {
				console.log(data)
			};
			return {
				form,
				handleSubmit,
			}
		},
	};
</script>

<style scoped lang="less">
	.container {
		padding: 0 20px 40px 20px;
		background-color: var(--color-bg-2);
		overflow: hidden;
		height: 100%;
	}

	.class-main {
		height: 953px;
		width: 1205;
		border: 1px solid #BBBBBB;
		// background-color:aqua;
	}

	.title {
		font-size: 20px;
		padding: 12px 0 10px 35px;
	}

	.top {
		border-bottom: 1px solid #BBBBBB;
	}

	.section-tit {
		width: 450px;
	}

	.question-title {
		font-size: 18px;
		padding: 12px 0 10px 40px;
		float: left;
	}

	.selection-option-tit {
		font-size: 20px;
		padding: 12px 0 10px 35px;
		float: left;
	}

	.botton {
		margin-left: 15px;
	}

	.submit {
		margin-left: 175px;
		margin-top: 20px;
	}
</style>
